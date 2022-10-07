import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useData } from "../context/datacontext";
import SearchIcon from "@mui/icons-material/Search";

export function Navigation() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { dispatch } = useData();

  // tracks input field change
  const onChangeHandler = (event) => {
    if (pathname !== "/") {
      navigate("/");
    }
    setInputValue(event.target.value);
  };

  //setup up the character name for search
  const searchHandler = (event) => {
    if (event.key === "Enter") {
      dispatch({ type: "SET_CHARACTER_NAME", payload: { value: inputValue } });
    }
  };

  return (
    <header className="flex justify-between items-center p-4 bg-[color:var(--body-bg)] h-20 border-b-2 border-[color:var(--primary-color)] fixed inset-x-0 top-0 md:static z-10">
      <div className="max-w-[7rem] sm:max-w-[10rem]">
        <Link to="/">
          <img
            src="/images/marvel-logo.png"
            alt="logo"
            className="w-full h-auto object-cover"
          />
        </Link>
      </div>
      <div className="flex items-center gap-1">
        <input
          className="w-40 sm:focus:w-60 md:w-60 md:focus:w-80 duration-300 text-base font-semibold outline-none bg-transparent border-b-2 border-[color:var(--primary-color)] text-[color:var(--font-color)]"
          type="search"
          placeholder="Search"
          value={inputValue}
          onChange={onChangeHandler}
          onKeyUp={searchHandler}
        />
        <SearchIcon
          className="cursor-pointer"
          onClick={() => {
            dispatch({
              type: "SET_CHARACTER_NAME",
              payload: { value: inputValue },
            });
          }}
        />
      </div>
      <button
        className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]"
        onClick={() => (pathname === "/" ? navigate("/saved") : navigate("/"))}
      >
        {pathname === "/" ? "View Saved" : "Home"}
      </button>
    </header>
  );
}
