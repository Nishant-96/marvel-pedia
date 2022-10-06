import React from "react";

export function Footer() {
  return (
    <div className="mx-auto flex gap-6">
      <button className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]">
        Prev
      </button>
      <button className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]">
        Next
      </button>
    </div>
  );
}
