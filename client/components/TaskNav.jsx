import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const TaskNav = () => {
  const [activeLink, setActiveLink] = useState("all");

  const handleFilterButtonClick = (e) => {
    setActiveLink([e.target.name]);
  };

  return (
    <section>
      <div className="d-flex justify-content-between">
        <ul className="nav nav-tabs mb-4 pb-2 ms-5 mb-0" role="tablist">
          <li className={`nav-item `} role="presentation">
            <Link
              className={`nav-link ${activeLink === "all" ? "active" : ""}`}
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              to="/"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
              name="all"
              onClick={handleFilterButtonClick}>
              All
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className={`nav-link ${activeLink === "active" ? "active" : ""}`}
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              to="/active"
              role="tab"
              aria-controls="ex1-tabs-1"
              name="active"
              onClick={handleFilterButtonClick}>
              Active
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className={`nav-link ${
                activeLink === "completed" ? "active" : ""
              }`}
              id="ex1-tab-1"
              data-mdb-toggle="tab"
              to="/completed"
              role="tab"
              aria-controls="ex1-tabs-1"
              name="completed"
              onClick={handleFilterButtonClick}>
              Completed
            </Link>
          </li>
        </ul>
      </div>

      <Outlet />
    </section>
  );
};

export default TaskNav;
