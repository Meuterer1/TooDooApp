import { ADD_TASK } from "../actions/addTask";
import { DELETE_TASK } from "../actions/deleteTask";
import { GET_TASKS_FROM_DATABASE } from "../actions/getAllTasks";
import { GET_TASK_DONE } from "../actions/getTaskDone";
import { UPDATE_TASK } from "../actions/updateTasks";

const initialState = {
  toDo: [
    {
      _id: "b076235b4c104c5488afd09fbe5d56e3",
      task: "Przykładowe zadanie",
      finished: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS_FROM_DATABASE:
      return {
        ...state,
        toDo: Array.isArray(action.payload) ? action.payload : [],
      };
    case UPDATE_TASK:
      const allTasks = state.toDo;
      let updatedTask = allTasks.toDo.map((item) => {
        if (item._id === action.payload.id) {
          return { ...item, task: action.payload.task };
        } else return item;
      });
      if (updatedTask) {
        return {
          ...state,
          toDo: { toDo: updatedTask },
        };
      }
      return {
        ...state,
      };
    case DELETE_TASK:
      const getData = state.toDo;
      const data = getData.toDo.filter((item) => item._id !== action.payload);
      return {
        ...state,
        toDo: { toDo: data },
      };
    case GET_TASK_DONE:
      const all = state.toDo;
      const finishedTasks = all.toDo.map((item) => {
        if (item._id === action.payload) {
          return {
            ...item,
            finished: !item.finished,
          };
        }
        return item;
      });
      return {
        ...state,
        toDo: {
          ...state,
          toDo: finishedTasks,
        },
      };
    case ADD_TASK:
      const currentState = state.toDo;
      return {
        ...state,
        toDo: [...currentState, action.payload],
      };
    default:
      return state;
  }
}

export default taskReducer;
