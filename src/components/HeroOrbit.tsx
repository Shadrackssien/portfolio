import { PropsWithChildren } from "react";

export const HeroOrbit = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{
  size: number;
  rotation: number;
}>) => {
  return (
    <div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <div className="animate-spin [animation-duration:100s] ">
          <div
            className=""
            style={{
              height: `${size}px`,
              width: `${size}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            <div className="animate-spin [animation-duration:100s] ">
              <div className="inline-flex ">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
