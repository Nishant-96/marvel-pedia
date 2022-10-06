import React from "react";
import CloseIcon from "@mui/icons-material/Close";
export function CharacterModal() {
  return (
    <div className="h-screen w-full md:w-2/4 bg-[color:var(--body-bg)] fixed inset-y-0 z-20 flex flex-col p-4 border-2 border-[color:var(--primary-color)]">
      <CloseIcon className="ml-auto text-[color:var(--primary-color)] cursor-pointer" />
      <div className="flex flex-col items-center justify-between basis-11/12">
        <div>Image</div>
        <div>Description</div>
        <button className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]">
          Save Character
        </button>
      </div>
    </div>
  );
}
