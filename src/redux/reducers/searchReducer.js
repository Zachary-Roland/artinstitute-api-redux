import { SET_SEARCH, CLEAR_SEARCH } from "../actions";

const initialSearchState = [];

export default function searchReducer(state = initialSearchState, action) {
  switch (action.type) {
    case SET_SEARCH:
      return [...action.search];
    case CLEAR_SEARCH:
      return [];
    default:
      return state;
  }
}
