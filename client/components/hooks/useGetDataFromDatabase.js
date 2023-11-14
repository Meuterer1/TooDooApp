import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../../actions/getAllTasks";
import AddTask from "../AddTask";

const useGetDataFromDatabase = () => {
  const getDataFromDatabase = async () => {
    const dispatch = useDispatch();
    try {
      const response = await axios.get("http://localhost:8080/");
      const toDos = response.data;
      console.log("toDos w getDataFromDatabase", toDos);
      {
        toDos
          ? dispatch(getAllTasks(toDos))
          : dispatch(AddTask({ task: "Przykładowe zadanie" }));
      }
    } catch (err) {
      console.error(err);
    }
  };
  getDataFromDatabase();
};

export default useGetDataFromDatabase;
