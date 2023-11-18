import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../../actions/getAllTasks";

const useGetDataFromDatabase = () => {
  const getDataFromDatabase = async () => {
    const dispatch = useDispatch();
    try {
      const response = await axios.get("http://localhost:8080/");
      const toDos = response.data;
      console.log("dane pobrane: ", toDos);
      dispatch(getAllTasks(toDos));
    } catch (err) {
      console.error(err);
    }
  };
  getDataFromDatabase();
};

export default useGetDataFromDatabase;
