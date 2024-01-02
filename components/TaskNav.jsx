import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const TaskNav = () => {
  return (
    <section>
      <ul className="nav nav-tabs mb-4 pb-2 ms-5 mb-0 mt-5" role="tablist">
        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link bg-light"
            to="/"
            activeClassName="active"
            exact>
            Active
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link bg-light"
            to="/completed"
            activeClassName="active"
            exact>
            Completed
          </NavLink>
        </li>
        <li className="nav-item" role="presentation">
          <NavLink
            className="nav-link bg-light"
            to="/all"
            activeClassName="active"
            exact>
            All
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </section>
  );
};

export default TaskNav;
