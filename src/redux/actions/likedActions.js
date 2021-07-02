export const SET_LIKED = "Set Liked Songs";
export const DELETE_LIKED = "Delete Liked Song";
export const CLEAR_LIKED = "Clear Liked Songs";

export function setLiked(liked) {
  return { type: SET_LIKED, liked };
}
export function deleteLiked(liked) {
  return { type: DELETE_LIKED, liked };
}
export function clearLiked(liked) {
  return { type: CLEAR_LIKED, liked };
}
