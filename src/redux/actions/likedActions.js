export const ADD_LIKED = "Set Liked Songs";
export const DELETE_LIKED = "Delete Liked Song";
export const CLEAR_LIKED = "Clear Liked Songs";

export function addLiked(result) {
  return { type: ADD_LIKED, result };
}
export function deleteLiked(id) {
  return { type: DELETE_LIKED, id };
}
export function clearLiked() {
  return { type: CLEAR_LIKED };
}
