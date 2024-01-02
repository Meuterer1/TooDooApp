import React from "react";

const EnergyOptions = ({ selected }) => {
  return (
    <>
      <option disabled selected={!selected} value>
        {" "}
        -- Select the energy level --{" "}
      </option>
      <option value={"full"} selected={selected === "full"}>
        Full
      </option>
      <option value={"medium"} selected={selected === "medium"}>
        Medium
      </option>
      <option value={"tired"} selected={selected === "tired"}>
        Tired
      </option>
    </>
  );
};

export default EnergyOptions;
