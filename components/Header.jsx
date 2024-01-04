import React, { useState } from "react";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showAside } from "../actions/options/showAside";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const Header = ({ showMenu }) => {
  const [isAside, setIsAside] = useState(false);
  const getData = useGetDataFromDatabase();
  const dispatch = useDispatch();

  const handleMenuOnClick = () => {
    setIsAside(!isAside);
    dispatch(showAside(!isAside));
  };

  useEffect(() => {
    getData;
  }, []);
  return (
    <header
      className={`container-fluid d-flex ${
        showMenu ? "justify-content-end" : "justify-content-between"
      } align-items-center p-2 mb-0 bg-white headline border-bottom`}>
      {!showMenu && (
        <Link className="ps-5" onClick={handleMenuOnClick}>
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer text-dark"
            size="2xl"></FontAwesomeIcon>
        </Link>
      )}
      <section className="d-flex justify-content-end pe-5 h-100 w-auto">
        <img
          src="assets/Logo.jpg"
          className="h-100 border rounded-circle"></img>
      </section>
    </header>
  );
};

export default Header;
