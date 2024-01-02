import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Aside from "../components/Aside";
import CalendarPage from "../components/Calendar";
import Header from "../components/Header";
import store from "../store/store";

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "../components/TaskList";
import TaskPanel from "../components/TaskPanel";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elements = document.querySelectorAll('[data-toggle="tooltip"]');
      elements.forEach(function (element) {
        new bootstrap.Tooltip(element);
      });
    });

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <section className="container-fluid m-0 p-0">
          <Header />
          <main className="col-md-12 d-flex">
            {screenWidth > 767 && <Aside></Aside>}
            <section className="col-md-9 col-sm-12 bg-light">
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
                <Route path="/calendar" element={<CalendarPage />} />
              </Routes>
            </section>
          </main>
        </section>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
