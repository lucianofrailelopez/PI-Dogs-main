import { GETDOGS, GETDOGBYID } from "../actions/types";

const initialState = {
  charactersDogs: [],
  characterDog: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDOGS:
      return {
        ...state,
        charactersDogs: action.payload,
      };
    case GETDOGBYID:
      return {
        ...state,
        characterDog: action.payload,
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
