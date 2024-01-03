import React from "react";

import { useEffect } from "react";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const Header = () => {
  const getData = useGetDataFromDatabase();

  useEffect(() => {
    getData;
  }, []);
  return (
    <header className="container-fluid d-flex justify-content-end p-2 mb-0 bg-white headline border-bottom">
      <section className="d-flex justify-content-end pe-5 h-100 w-auto">
        <img
          src="assets/Logo.jpg"
          className="h-100 border rounded-circle"></img>
      </section>
    </header>
  );
};

export default Header;
