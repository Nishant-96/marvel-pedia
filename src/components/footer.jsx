import React from "react";

export function Footer({ pagination, page, totalPages }) {
  return (
    <div className="mx-auto flex gap-6">
      {page.pageNumber > 1 && (
        <button
          className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]"
          onClick={() => pagination("Prev")}
        >
          Prev
        </button>
      )}
      {page.pageNumber !== totalPages && (
        <button
          className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]"
          onClick={() => pagination("Next")}
        >
          Next
        </button>
      )}
    </div>
  );
}
