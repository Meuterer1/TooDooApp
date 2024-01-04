import { SHOW_ASIDE } from "../actions/options/showAside";

const initialState = {
  showAside: false,
};

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ASIDE:
      return {
        ...state,
        showAside: action.payload,
      };
    default:
      return state;
  }
}

export default optionsReducer;
