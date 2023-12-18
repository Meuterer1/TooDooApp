export const UPDATE_DROPPED_TASKS = "UPDATE_DROPPED_TASKS";

export const UpdateDroppedTasks = (tasks) => {
  console.log("przekazane do reducera: ", tasks);
  return {
    type: UPDATE_DROPPED_TASKS,
    payload: {
      toDo: tasks,
    },
  };
};
