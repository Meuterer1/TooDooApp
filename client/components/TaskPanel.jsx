import React, { useEffect } from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import TaskNav from "./TaskNav";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const TaskPanel = () => {
  let getData = useGetDataFromDatabase();

  useEffect(() => {
    getData;
    console.log("dane: ", getData);
  }, []);

  return (
    <div className="">
      <section className="background">
        <Header />
        <AddTask refreshTasks={refreshTasks} />
      </section>
      <TaskNav />
    </div>
  );
};

export default TaskPanel;
