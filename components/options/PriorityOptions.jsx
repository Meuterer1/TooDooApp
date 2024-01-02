import React from "react";

const PriorityOptions = ({ selected }) => {
  return (
    <>
      <option disabled value selected={!selected}>
        {" "}
        -- Set Priority --{" "}
      </option>
      <option value={"high"} selected={selected === "high"}>
        High
      </option>
      <option value={"medium"} selected={selected === "medium"}>
        Medium
      </option>
      <option value={"low"} selected={selected === "low"}>
        Low
      </option>
    </>
  );
};

export default PriorityOptions;
