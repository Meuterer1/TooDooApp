import React from "react";

const PlaceOptions = ({ selected }) => {
  return (
    <>
      <option disabled value selected={!selected}>
        {" "}
        -- Choose a place --{" "}
      </option>
      <option value={"work"} selected={selected === "work"}>
        Work
      </option>
      <option value={"home"} selected={selected === "home"}>
        Home
      </option>
      <option value={"meantime"} selected={selected === "meantime"}>
        Meantime
      </option>
      <option value={"road"} selected={selected === "road"}>
        Road
      </option>
    </>
  );
};

export default PlaceOptions;
