export const UPDATE_TASK = "UPDATE_TASK";

export const updateTask = (_id, objectToUpdate) => ({
  type: UPDATE_TASK,
  payload: {
    id: _id,
    task: objectToUpdate.task,
  },
});
