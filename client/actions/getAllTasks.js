export const GET_TASKS_FROM_DATABASE = "GET_TASKS_FROM_DATABASE";

export const getAllTasks = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_TASKS_FROM_DATABASE,
        payload: {
          toDo: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
};
