import React from "react";
import { useLocation } from "react-router-dom";
import { useData } from "../context/datacontext";
import DeleteIcon from "@mui/icons-material/Delete";

export function Card({ characterDetail, setCharacterModal }) {
  const { pathname } = useLocation();
  const { dispatch } = useData();

  return (
    <div
      className="rounded-md flex flex-col cursor-pointer hover:scale-105 duration-500 shadow-xl hover:shadow-[0_2px_10px_rgba(0,0,0,0.3)] w-60 relative overflow-hidden"
      onClick={() =>
        setCharacterModal((prev) => ({
          ...prev,
          display: true,
          characterDetail: characterDetail,
        }))
      }
    >
      <img
        className="w-full h-auto object-cover"
        alt="character"
        src={`${
          characterDetail?.thumbnail?.path +
            "/portrait_uncanny." +
            characterDetail?.thumbnail?.extension ||
          "/images/marvel-display.png"
        } `}
      />
      <div className="flex flex-wrap mt-auto items-center justify-center h-16 bg-[color:var(--black-overlay)] rounded-b-md absolute inset-x-0 bottom-0">
        <h3 className="text-[color:var(--body-bg)] font-bold text-lg text-center">
          {characterDetail?.name?.split("(")?.[0]}
        </h3>
      </div>
      {pathname === "/saved" && (
        <div
          className="bg-[color:var(--body-bg)] absolute right-3 top-3 p-1 rounded-full"
          onClick={(event) => {
            dispatch({
              type: "DELETE_FROM_SAVED",
              payload: { value: characterDetail?.id },
            });
            event.stopPropagation();
          }}
        >
          <DeleteIcon className="text-[color:var(--primary-color)]" />
        </div>
      )}
    </div>
  );
}
