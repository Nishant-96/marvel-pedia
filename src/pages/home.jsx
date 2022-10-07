import React, { useState } from "react";
import { Card, Footer } from "../components";
import { useData } from "../context/datacontext";
import { CharacterModal } from "./character-modal";

export function Home() {
  const { state } = useData();
  const [characterModal, setCharacterModal] = useState({
    display: false,
    characterDetail: {},
  });
  const [page, setPage] = useState({ start: 0, end: 3, pageNumber: 1 });

  const totalPages = Math.ceil(state?.characterListArr?.length / 3);

  // page setting operation
  const pagination = (pressedButton) => {
    if (totalPages > 1) {
      pressedButton === "Next"
        ? setPage((prev) => ({
            ...prev,
            start: prev.start + 3,
            end: prev.end + 3,
            pageNumber: prev.pageNumber + 1,
          }))
        : setPage((prev) => ({
            ...prev,
            start: prev.start - 3,
            end: prev.end - 3,
            pageNumber: prev.pageNumber - 1,
          }));
    }
  };

  return (
    <>
      <div className="flex flex-col md:h-[calc(100vh-80px)] gap-16 p-6 mt-[80px] md:mt-0">
        <div className="flex justify-evenly items-center basis-5/6 flex-col md:flex-row gap-8">
          {state?.characterListArr?.length > 0 ? (
            state?.characterListArr
              .slice(page.start, page.end)
              .map((currCharacter) => (
                <Card
                  key={currCharacter?.id}
                  characterDetail={currCharacter}
                  setCharacterModal={setCharacterModal}
                />
              ))
          ) : (
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[75%] md:w-[60%]">
                <img
                  className="w-full h-auto object-cover"
                  alt="Background"
                  src="/images/marvel-background.jpg"
                />
              </div>
              {state?.noDataFoundFlag ? (
                <div className="font-bold text-3xl text-center">
                  No Such Character Found
                </div>
              ) : (
                <div className="font-semibold text-xl text-center">
                  Start Searching
                </div>
              )}
            </div>
          )}
        </div>
        {totalPages > 1 && (
          <Footer pagination={pagination} page={page} totalPages={totalPages} />
        )}
      </div>
      <CharacterModal
        characterModal={characterModal}
        setCharacterModal={setCharacterModal}
      />
    </>
  );
}
