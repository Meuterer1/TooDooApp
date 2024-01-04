import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Aside from "../components/Aside";
import CalendarPage from "../components/Calendar";
import Header from "../components/Header";

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "../components/TaskList";
import TaskPanel from "../components/TaskPanel";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showAside = useSelector((state) => state.options.showAside);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
    document.addEventListener("DOMContentLoaded", function () {
      var elements = document.querySelectorAll('[data-toggle="tooltip"]');
      elements.forEach(function (element) {
        new bootstrap.Tooltip(element);
      });
    });

    const handleResize = () => {
      if (window.innerWidth > 767) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      <section className="container-fluid d-flex m-0 p-0">
        {showMenu && <Aside isAsideOpen={showAside} />}
        <main
          className={`col-lg-10 col-md-9 col-12 d-flex flex-column light-background `}>
          <Header showMenu={showMenu} />
          {showAside ? (
            <Aside isAsideOpen={showAside} />
          ) : (
            <section className={`col-md-12 col-sm-12 light-background`}>
              <Routes>
                <Route path="/" element={<TaskPanel />}>
                  <Route path="/" element={<TaskList filterBy={"active"} />} />
                  <Route path="all" element={<TaskList filterBy={"all"} />} />
                  <Route
                    path="completed"
                    element={<TaskList filterBy={"completed"} />}
                  />
                </Route>
                <Route path="/addtask/:task" element={<TaskPanel />} />
                <Route path="/delete/:id" element={<TaskPanel />} />
                <Route
                  path="/calendar"
                  element={<CalendarPage showMenu={showMenu} />}
                />
              </Routes>
            </section>
          )}
        </main>
      </section>
    </Router>
  );
};

export default App;
