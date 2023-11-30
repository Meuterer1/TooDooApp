import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllTasks } from "../../actions/getAllTasks";

const useGetDataFromDatabase = () => {
  const getDataFromDatabase = async () => {
    const dispatch = useDispatch();
    try {
      const response = await axios.get(
        "https://meuterertodoappserver-110f55b64ca3.herokuapp.com/"
      );
      const toDos = response.data;
      dispatch(getAllTasks(toDos));
    } catch (err) {
      console.error(err);
    }
  };
  getDataFromDatabase();
};

export default useGetDataFromDatabase;
