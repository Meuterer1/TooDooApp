import axios from "axios";
import { useState } from "react";

const useRefreshTasks = () => {
  const getTasks = async () => {
    const [tasks, setTasks] = useState([]);
    await axios
      .get(process.env.REACT_APP_API_URL)
      .then((response) => {
        setTasks(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
    return tasks;
  };
  return getTasks;
};

export default useRefreshTasks;
