import React from "react";

const TypeOptions = ({ selected }) => {
  return (
    <>
      <option disabled selected={!selected} value>
        {" "}
        -- Select a type --{" "}
      </option>
      <option value={"strategy"} selected={selected === "strategy"}>
        Strategy
      </option>
      <option value={"research"} selected={selected === "research"}>
        Research
      </option>
      <option value={"hobby"} selected={selected === "hobby"}>
        Hobby
      </option>
      <option value={"comunication"} selected={selected === "comunication"}>
        Comunication
      </option>
      <option value={"production"} selected={selected === "production"}>
        Production
      </option>
    </>
  );
};

export default TypeOptions;
