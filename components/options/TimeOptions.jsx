import React from "react";

const TimeOptions = ({ selected }) => {
  return (
    <>
      <option disabled selected={!selected} value>
        {" "}
        -- Set time --{" "}
      </option>
      <option value={5} selected={selected === "5"}>
        5 min
      </option>
      <option value={10} selected={selected === "10"}>
        10 min
      </option>
      <option value={15} selected={selected === "15"}>
        15 min
      </option>
      <option value={30} selected={selected === "30"}>
        30 min
      </option>
      <option value={45} selected={selected === "45"}>
        45 min
      </option>
      <option value={60} selected={selected === "60"}>
        1 h
      </option>
      <option value={90} selected={selected === "90"}>
        1,5 h
      </option>
      <option value={120} selected={selected === "120"}>
        2 h
      </option>
      <option value={150} selected={selected === "150"}>
        2,5 h
      </option>
      <option value={180} selected={selected === "180"}>
        3 h
      </option>
      <option value={240} selected={selected === "240"}>
        4 h
      </option>
      <option value={300} selected={selected === "300"}>
        5 h
      </option>
      <option value={1440} selected={selected === "1440"}>
        All day
      </option>
    </>
  );
};

export default TimeOptions;
