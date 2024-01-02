export const UPDATE_TASK = "UPDATE_TASK";

export const updateTask = (_id, objectToUpdate) => {
  console.log("updateTask: ", objectToUpdate);
  if (objectToUpdate.extendedProps) {
    const { _id, energy, place, priority, time, type } =
      objectToUpdate.extendedProps;
    return {
      type: UPDATE_TASK,
      payload: {
        id: _id,
        task: objectToUpdate.title,
        energy: energy,
        place: place,
        priority: priority,
        time: time,
        type: type,
      },
    };
  }
  return {
    type: UPDATE_TASK,
    payload: {
      id: _id,
      task: objectToUpdate.task,
    },
  };
};
