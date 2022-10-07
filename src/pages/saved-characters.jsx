import React, { useState } from "react";
import { Card } from "../components";
import { useData } from "../context/datacontext";
import { CharacterModal } from "./character-modal";

export function SavedCharactersPage() {
  const { state } = useData();
  const [characterModal, setCharacterModal] = useState({
    display: false,
    characterDetail: {},
  });
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center p-4">
        {state?.savedCharacterListArr?.length > 0 ? (
          state?.savedCharacterListArr?.map((currCharacter) => (
            <Card
              key={currCharacter?.id}
              characterDetail={currCharacter}
              setCharacterModal={setCharacterModal}
            />
          ))
        ) : (
          <div className="flex flex-col h-[70vh] justify-center gap-2">
            <div className="font-bold text-4xl"> No Saved Characters</div>
            <div className="font-semibold text-xl text-center">
              Start Searching
            </div>
          </div>
        )}
      </div>
      <CharacterModal
        characterModal={characterModal}
        setCharacterModal={setCharacterModal}
      />
    </>
  );
}
