import React from "react";

import { useEffect } from "react";
import useGetDataFromDatabase from "./hooks/useGetDataFromDatabase";

const Header = () => {
  const getData = useGetDataFromDatabase();

  useEffect(() => {
    getData;
  }, []);
  return (
    <header className="container-fluid d-flex justify-content-start pt-3 ps-3 mb-0 shadow-sm">
      <h2>ToDo</h2>
    </header>
  );
};

export default Header;
