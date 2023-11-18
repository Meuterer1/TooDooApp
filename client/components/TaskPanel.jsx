import React, { useEffect } from "react";
import AddTask from "./AddTask";
import TaskNav from "./TaskNav";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const TaskPanel = () => {
  let getData = useGetDataFromDatabase();

  useEffect(() => {
    getData;
    console.log("dane: ", getData);
  }, []);

  return (
    <section className="">
      <AddTask />
      <TaskNav />
    </section>
  );
};

export default TaskPanel;
