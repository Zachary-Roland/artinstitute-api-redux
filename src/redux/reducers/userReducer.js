import { SET_USER, CLEAR_USER } from "../actions";

const initialUserState = { username: null };

export default function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, username: action.username };
    case CLEAR_USER:
      return { ...state, username: "" };
    default:
      return state;
  }
}
