import { createContext, useContext, useEffect, useReducer } from "react";
import { getCharacters, reducerFunc } from "../utils";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  characterName: "",
  characterListArr: [],
  savedCharacterListArr: [],
};

const DataProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  // Performs the get call
  useEffect(() => {
    state?.characterName &&
      (async () => {
        try {
          const res = await getCharacters(state.characterName);
          if (res) {
            dispatch({
              type: "SET_CHARACTER_LIST_ARR",
              payload: { value: res },
            });
          }
        } catch (error) {
          console.error(error);
        }
      })();
  }, [state.characterName]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
