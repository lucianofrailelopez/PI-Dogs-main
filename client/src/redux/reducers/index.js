import { GETDOGS } from "../actions/types";

const initialState = {
  charactersDogs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETDOGS:
      return {
        ...state,
        charactersDogs: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
