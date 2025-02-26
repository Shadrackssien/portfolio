"use client";

import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import Image from "next/image";
import * as React from "react";
import contactImage from "@/assets/images/contact-us.png";

export const ContactSection = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update the state based on which field changed
    // If the field has a name of "from_name", update the "name" property in the state
    const stateKey =
      name === "from_name" ? "name" : name === "reply_to" ? "email" : name;

    setUserInput((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !publicKey) {
      toast.error(
        "EmailJS configuration is missing. Check your environment variables."
      );
      setIsSubmitting(false);
      return;
    }

    try {
      console.log("Sending email with data:", {
        from_name: userInput.name,
        reply_to: userInput.email,
        message: userInput.message,
      });

      const response = await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: userInput.name,
          reply_to: userInput.email,
          message: userInput.message,
        },
        publicKey
      );

      console.log("EmailJS Response:", response);

      toast.success(
        "Message sent successfully! Will get back to you soon. Thank you!"
      );
      setUserInput({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error(
        `Failed to send message: ${
          error.text || error.message || "Unknown error"
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-16 lg:py-24 relative">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      <ToastContainer position="bottom-left" autoClose={5000} />

      <div className="container relative">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals"
        />
        <div
          className="mt-12 relative overflow-hidden z-0 bg-transparent 
           text-gray-900 py-8 px-10 border
          rounded-3xl text-center md:text-left"
        >
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="md:flex items-center md:justify-center">
              <Image src={contactImage} alt="Contact Us" />
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:w-1/2 lg:mt-16 space-y-8 lg:space-y-12 "
            >
              <div className="flex flex-col">
                <input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  name="from_name"
                  value={userInput.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-transparent text-white rounded-lg border transition"
                />
              </div>

              <div className="flex flex-col">
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email Address"
                  name="reply_to"
                  value={userInput.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 bg-transparent text-white rounded-lg border transition"
                />
              </div>

              <div className="flex flex-col">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={userInput.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="px-4 py-3 bg-transparent text-white rounded-lg border transition"
                />
              </div>

              <div className="md:flex md:justify-center md:items-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-gray-900 bg-white font-semibold border rounded-xl px-6 py-3 "
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
