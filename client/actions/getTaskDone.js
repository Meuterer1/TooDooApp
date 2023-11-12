export const GET_TASK_DONE = "GET_TASK_DONE";

export const getTaskDone = (id) => ({
  type: GET_TASK_DONE,
  payload: id,
});
