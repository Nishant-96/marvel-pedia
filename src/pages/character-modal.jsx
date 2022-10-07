import React from "react";
import { useData } from "../context/datacontext";
import CloseIcon from "@mui/icons-material/Close";
export function CharacterModal({ characterModal, setCharacterModal }) {
  const { state, dispatch } = useData();

  return !characterModal?.display ? null : (
    <div className="h-screen w-full md:w-2/4 bg-[color:var(--body-bg)] fixed inset-y-0 z-20 flex flex-col p-4 border-2 border-[color:var(--primary-color)]">
      <CloseIcon
        className="ml-auto text-[color:var(--primary-color)] cursor-pointer"
        onClick={() =>
          setCharacterModal((prev) => ({
            ...prev,
            display: false,
            characterDetail: {},
          }))
        }
      />
      <div className="flex flex-col items-center justify-between basis-11/12">
        <div className="w-52 rounded overflow-hidden">
          <img
            className="w-full h-auto object-cover"
            alt="character"
            src={`${
              characterModal?.characterDetail?.thumbnail?.path +
                "/portrait_uncanny." +
                characterModal?.characterDetail?.thumbnail?.extension ||
              "/images/marvel-display.png"
            } `}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-semibold text-center text-lg">
            {characterModal?.characterDetail?.name}
          </div>
          <div className="text-justify">
            {characterModal?.characterDetail?.description}
          </div>
          <div>
            Stories: Presence In{" "}
            {characterModal?.characterDetail?.stories?.available} Stories
          </div>
          <div>
            Comics: {characterModal?.characterDetail?.comics?.available}
          </div>
          <div>
            Series: {characterModal?.characterDetail?.series?.available}
          </div>
        </div>
        <button
          className="px-4 py-1.5 text-[color:var(--body-bg)] rounded-md border-2 border-[color:var(--primary-color)] bg-[color:var(--primary-color)] hover:bg-transparent duration-500 font-semibold hover:text-[color:var(--primary-color)]"
          onClick={() => {
            state.savedCharacterListArr.some(
              (currCharacter) =>
                currCharacter.id === characterModal.characterDetail.id
            )
              ? dispatch({
                  type: "DELETE_FROM_SAVED",
                  payload: { value: characterModal.characterDetail.id },
                })
              : dispatch({
                  type: "ADD_TO_SAVED",
                  payload: { value: characterModal.characterDetail },
                });
          }}
        >
          {state.savedCharacterListArr.some(
            (currCharacter) =>
              currCharacter.id === characterModal.characterDetail.id
          )
            ? "Remove From Saved"
            : "Save Character"}
        </button>
      </div>
    </div>
  );
}
