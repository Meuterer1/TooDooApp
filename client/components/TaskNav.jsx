import React from "react";
import { Link, Outlet } from "react-router-dom";
const TaskNav = () => {
  const handleFilterButtonClick = () => {};

  return (
    <section>
      <ul className="nav nav-tabs mb-4 pb-2 ms-5 mb-0 mt-5" role="tablist">
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link active bg-light"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            to="/"
            role="tab"
            aria-controls="ex1-tabs-1"
            aria-selected="true">
            All
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            to="/active"
            role="tab"
            aria-controls="ex1-tabs-1">
            Active
          </Link>
        </li>
        <li className="nav-item" role="presentation">
          <Link
            className="nav-link"
            id="ex1-tab-1"
            data-mdb-toggle="tab"
            to="/completed"
            role="tab"
            aria-controls="ex1-tabs-1">
            Completed
          </Link>
        </li>
      </ul>

      <div className="d-flex w-100 justify-content-end me-5 pe-5 pb-3">
        <button
          className="px-2 border-0 bg-transparent"
          onClick={handleFilterButtonClick}>
          <i className="fa-solid fa-filter"></i>
        </button>
        <button className="px-2 border-0 bg-transparent">
          <i className="fa-solid fa-arrow-down-wide-short"></i>
        </button>
        <button className="px-2 border-0 bg-transparent">
          <i className="fa-solid fa-arrow-down-short-wide"></i>
        </button>
      </div>
      <Outlet />
    </section>
  );
};

export default TaskNav;
