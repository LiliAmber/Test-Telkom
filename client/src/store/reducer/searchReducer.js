import {
  SHOW_REPOSITORIES,
  SHOW_LOADING,
  SHOW_ERROR,
} from "../action/actionType";

const initialState = {
  repositories: [],
  loading: false,
  error: null,
};

function searchReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_REPOSITORIES:
      return { ...state, repositories: payload };
    case SHOW_LOADING:
      return { ...state, loading: payload };
    case SHOW_ERROR:
      return { ...state, errors: payload };
    default:
      return state;
  }
}

export default searchReducer;
