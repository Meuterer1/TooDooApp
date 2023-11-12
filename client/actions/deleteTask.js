export const DELETE_TASK = "DELETE_TASK";

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});
