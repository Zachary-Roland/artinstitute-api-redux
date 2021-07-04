import { ADD_LIKED, DELETE_LIKED, CLEAR_LIKED } from "../actions";

const initialLikedState = [];

export default function likedReducer(state = initialLikedState, action) {
  switch (action.type) {
    case ADD_LIKED:
      return [...state, action.val];
    case DELETE_LIKED:
      return state.filter((val) => val.id !== action.id);
    case CLEAR_LIKED:
      return [];
    default:
      return state;
  }
}
