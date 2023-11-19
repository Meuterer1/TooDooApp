import axios from "axios";

const useSynchronise = () => {
  const synchronise = async (stateTasksList) => {
    try {
      const response = await axios.get(
        `https://stark-earth-03918-bae1ddc364db.herokuapp.com/api_node/express`
      );
      const toDos = response.data;
      const set1 = new Set(toDos.map((item) => item._id));
      const set2 = stateTasksList.toDo;
      const duplicates = set2.toDo.filter((item) => set1.has(item._id));
      const deletedRecords = toDos.filter((item) => {
        if (!set2.toDo.find((secondItem) => secondItem._id === item._id)) {
          return item;
        }
      });
      const newRecords = set2.toDo.filter((item) => {
        if (!set1.has(item._id)) {
          return item;
        }
      });

      if (newRecords.length > 0) {
        try {
          await axios.post(
            `${process.env.REACT_APP_API_URL`addtask`}`,
            newRecords
          );
        } catch (error) {
          console.error("Błąd podczas synchronizacji: ", error);
        }
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL`edit`}`,
          duplicates
        );
        console.log("Odpowiedź od serwera: ", response.data);
        // response.setHeader("Content-Type", "application/json");
      } catch (error) {
        console.error("Błąd podczas synchronizacji: ", error);
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL`delete`}`,
          deletedRecords
        );
        console.log("Odpowiedź od serwera: ", response.data);
        // response.setHeader("Content-Type", "application/json");
      } catch (error) {
        console.error("Błąd podczas synchronizacji: ", error);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return synchronise;
};

export default useSynchronise;
