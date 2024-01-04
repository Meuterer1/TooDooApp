import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showAside } from "../actions/options/showAside";

const Aside = ({ isAsideOpen }) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const dispatch = useDispatch();

  const handleArrowOnClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <aside className="card col-md-3 col-lg-2 d-flex flex-column min-vh-100 border-top-0 border-bottom-0 rounded-0 aside-background">
      <nav className={`card-body flex-grow-1 p-1 ${isAsideOpen && "p-5"}`}>
        <h3 className="headline-cat py-3 ps-md-3">Menu</h3>
        <ul className={`list-unstyled ps-md-3 ${isAsideOpen && "p-3"}`}>
          <li className="list-item d-flex align-items-center justify-content-between">
            <section className="d-flex align-items-center">
              <img src="./assets/grid.png" className="h-75 ps-0" />
              <p className="headline-cat mb-0 ps-2">Task Panel</p>
            </section>
            <a
              className="d-flex align-items-center cursor-pointer pe-2"
              onClick={handleArrowOnClick}>
              {isPanelOpen ? (
                <img src="assets/arrow_up.png" className="h-50" />
              ) : (
                <img src="assets/arrow_down.png" className="h-50" />
              )}
            </a>
          </li>
          {isPanelOpen && (
            <>
              <li className={`ps-md-4 pt-2 ms-1 ${isAsideOpen && "ps-4"}`}>
                <Link
                  to={"/"}
                  className="text-decoration-none link-secondary py-2"
                  onClick={() => dispatch(showAside(false))}>
                  Task List
                </Link>
              </li>
              <li className={`ps-md-4 pt-2 ms-1 ${isAsideOpen && "ps-4"}`}>
                <Link
                  to={"/calendar"}
                  className="text-decoration-none link-secondary py-2"
                  onClick={() => dispatch(showAside(false))}>
                  Calendar
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default Aside;
