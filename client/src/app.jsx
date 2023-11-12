import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../store/store";

import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import TaskList from "../components/TaskList";
import TaskPanel from "../components/TaskPanel";

window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

const App = () => {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      var elements = document.querySelectorAll('[data-toggle="tooltip"]');
      elements.forEach(function (element) {
        new bootstrap.Tooltip(element);
      });
    });
  }, []);

  return (
    <Provider store={store}>
      <section className="container">
        <Router>
          <Routes>
            <Route path="/" element={<TaskPanel />}>
              <Route path="/" element={<TaskList filterBy={"all"} />} />
              <Route path="active" element={<TaskList filterBy={"active"} />} />
              <Route
                path="completed"
                element={<TaskList filterBy={"completed"} />}
              />
            </Route>
            <Route path="/addtask/:task" element={<TaskPanel />} />
            <Route path="/delete/:id" element={<TaskPanel />} />
          </Routes>
        </Router>
      </section>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
