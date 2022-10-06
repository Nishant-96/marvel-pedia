import React from "react";

export function Card() {
  return (
    <div className="rounded-md flex flex-col cursor-pointer hover:scale-105 duration-500 shadow-xl hover:shadow-[0_2px_10px_rgba(0,0,0,0.3)] w-60 relative">
      <img
        className="w-full h-auto object-cover"
        alt="character"
        src="/images/marvel-display.png"
      />
      <div className="flex mt-auto items-center justify-center h-16 bg-[color:var(--black-overlay)] rounded-b-md absolute inset-x-0 bottom-0">
        <h3 className="text-[color:var(--body-bg)] font-bold text-lg">
          Hero Name
        </h3>
      </div>
    </div>
  );
}
