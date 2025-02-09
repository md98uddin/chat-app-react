import { test_contacts } from "../test-contact";

const INITIAL_STATE = {
  contacts: test_contacts,
  isLoading: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return state;
    case "ADD_MESSAGE": {
      return {
        ...state,
        contacts: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
