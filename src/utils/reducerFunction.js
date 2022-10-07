export function reducerFunc(state, action) {
  switch (action.type) {
    case "SET_CHARACTER_NAME":
      return (state = { ...state, characterName: action.payload.value });
    case "SET_CHARACTER_LIST_ARR":
      return (state = {
        ...state,
        characterListArr: [...action.payload.value],
      });
    case "ADD_TO_SAVED":
      return (state = {
        ...state,
        savedCharacterListArr: state.savedCharacterListArr.some(
          (element) => element.id === action.payload.value.id
        )
          ? [...state.savedCharacterListArr]
          : [...state.savedCharacterListArr, action.payload.value],
      });
    case "DELETE_FROM_SAVED":
      return (state = {
        ...state,
        savedCharacterListArr: state.savedCharacterListArr.filter(
          (currCharacter) => currCharacter.id !== action.payload.value
        ),
      });
    default:
      break;
  }
}
