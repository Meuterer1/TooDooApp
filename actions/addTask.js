export const ADD_TASK = "ADD_TASK";

export const addTask = (newTask) => ({
  type: ADD_TASK,
  payload: newTask,
});
