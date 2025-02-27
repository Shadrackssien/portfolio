import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import CustomCursor from "@/components/CustomCursor";
import CursorGradient from "@/components/CursorGradient";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-[url('/portfolio-background2.jpg')] bg-blend-overlay bg-black/10  min-h-screen object-cover object-center text-white antialiased font-sans"
        )}
      >
        <CustomCursor />
        <CursorGradient />
        {children}
      </body>
    </html>
  );
}
