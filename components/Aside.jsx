import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="card col-md-3 d-flex flex-column p-md-3 mt-1 min-vh-100 border-top-0 border-bottom-0">
      <nav className="card-body flex-grow-1">
        <h5 className="card-title">Menu</h5>
        <ul className="list-unstyled ps-md-3">
          <li>
            <Link to={"/"} className="text-decoration-none link-secondary">
              Task List
            </Link>
          </li>
          <li>
            <Link
              to={"/calendar"}
              className="text-decoration-none link-secondary">
              Calendar
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
