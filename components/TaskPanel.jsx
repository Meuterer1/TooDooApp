import React from "react";
import AddTask from "./AddTask";
import Aside from "./Aside";
import Header from "./Header";
import TaskNav from "./TaskNav";

import { useEffect, useState } from "react";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const TaskPanel = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getData = useGetDataFromDatabase();

  useEffect(() => {
    getData;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
      <Header />
      <main className="col-md-12 d-flex">
        {screenWidth > 767 && <Aside />}
        <section className="col-md-9 col-sm-12 bg-light">
          <AddTask />
          <TaskNav />
        </section>
      </main>
    </div>
  );
};

export default TaskPanel;
