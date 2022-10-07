import { createContext, useContext, useEffect, useReducer } from "react";
import { getCharacters, reducerFunc } from "../utils";

const DataContext = createContext();

const useData = () => useContext(DataContext);

const initialState = {
  characterName: "",
  characterListArr: [],
  savedCharacterListArr: [],
  noDataFoundFlag: false,
};

const DataProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  // Performs the get call
  useEffect(() => {
    state?.characterName &&
      (async () => {
        try {
          const res = await getCharacters(state.characterName);
          if (res.count > 0) {
            dispatch({
              type: "SET_CHARACTER_LIST_ARR",
              payload: { value: res.results },
            });
            dispatch({ type: "SET_NO_DATA_FLAG", payload: { value: false } });
          } else {
            dispatch({ type: "SET_NO_DATA_FLAG", payload: { value: true } });
            dispatch({
              type: "SET_CHARACTER_LIST_ARR",
              payload: { value: [] },
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
