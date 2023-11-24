import React from "react";
import AddTask from "./AddTask";
import Aside from "./Aside";
import Header from "./Header";
import TaskNav from "./TaskNav";

const TaskPanel = () => {
  useEffect(() => {
    getData;
  }, []);

  return (
    <div className="">
      <Header />
      <main className="col-md-12 d-flex">
        <Aside />
        <section className="col-md-9 bg-light">
          <AddTask />
          <TaskNav />
        </section>
      </main>
    </div>
  );
};

export default TaskPanel;
