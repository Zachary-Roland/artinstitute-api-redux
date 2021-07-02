export const SET_USER = "Set Logged In User";
export const CLEAR_USER = "Clear User";

export function setUser(username) {
  return { type: SET_USER, username };
}
export function clearUser() {
  return { type: CLEAR_USER };
}
