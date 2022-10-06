import React from "react";
import SearchIcon from "@mui/icons-material/Search";

export function Navigation() {
  return (
    <header className="flex justify-between items-center p-4 bg-[color:var(--body-bg)] h-20 border-b-2 border-[color:var(--primary-color)] fixed inset-x-0 top-0 md:static z-10">
      <div className="max-w-[7rem] sm:max-w-[10rem]">
        <img
          src="/images/marvel-logo.png"
          alt="logo"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex items-center gap-1">
        <input
          className="w-40 sm:focus:w-60 md:w-60 md:focus:w-80 duration-300 text-base font-semibold outline-none bg-transparent border-b-2 border-[color:var(--primary-color)] text-[color:var(--font-color)]"
          type="search"
          placeholder="Search"
        />
        <SearchIcon />
      </div>
      <button className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]">
        View Saved
      </button>
    </header>
  );
}
