import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/addTask";
import useMessage from "./hooks/useMessage";

import { addMinutes, format } from "date-fns";
import EnergyOptions from "./options/EnergyOptions";
import PlaceOptions from "./options/PlaceOptions";
import TimeOptions from "./options/TimeOptions";
import TypeOptions from "./options/TypeOptions";
import PriorityOptions from "./options/priorityOptions";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [taskOptions, setTaskOptions] = useState({
    dueDate: "",
    priority: "",
    place: "",
    type: "",
    energy: "",
    time: "",
  });

  const message = useMessage();
  const dispatch = useDispatch();

  const createTask = () => {
    const currentDate = new Date();
    const { v4: uuidv4 } = require("uuid");
    const uniqueId = uuidv4();
    const uniqueIdString = uniqueId.replace(/-/g, "").slice(0, 24);
    let end;

    if (taskOptions.time) {
      const newTime = addMinutes(taskOptions.dueDate, taskOptions.time);
      const time = format(newTime, "yyyy-MM-dd'T'HH:mm");
      end = time;
    }

    const object = {
      _id: uniqueIdString,
      task: inputValue,
      createDate: currentDate.toLocaleString(),
      dueDate: taskOptions.dueDate,
      priority: taskOptions.priority,
      place: taskOptions.place,
      type: taskOptions.type,
      energy: taskOptions.energy,
      time: taskOptions.time,
      endDate: end,
      finished: false,
    };

    dispatch(addTask(object));
    message("success", "Task added!");
    setShowOptions(false);
    setTaskOptions({
      dueDate: "",
      priority: "",
      place: "",
      type: "",
      energy: "",
      time: 0,
    });
  };

  const handleSelectOptionChange = (e) => {
    setTaskOptions({
      ...taskOptions,
      [e.target.name]: e.target.value,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      createTask();
      setInputValue("");
      e.target.removeEventListener("keydown", handleKeyDown);
    } else if (e.key === "Escape") {
      e.target.blur();
    }
  };

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddButtonOnClick = async () => {
    createTask();
    setInputValue("");
  };

  const handleOptionsOnClick = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <section className="d-flex justify-content-end pt-3 w-100">
      <div className="card d-flex align-items-center border-0 bg-light container-fluid px-md-5 pb-5 ">
        <div className="card-body w-100 d-flex m-5">
          <div className="d-flex flex-row align-items-center w-100">
            <input
              className="form-control form-control-lg "
              type="text"
              placeholder="Add new task.."
              onChange={handleInputOnChange}
              onKeyDown={handleKeyDown}
              value={inputValue}
              name="addTaskInput"
            />
            <a onClick={handleOptionsOnClick}>
              <i className="fa-solid fa-caret-down ms-3 cursor-pointer"></i>
            </a>
          </div>
          <button
            className="btn btn-dark px-4 py-2 ms-3"
            onClick={handleAddButtonOnClick}>
            Add
          </button>
        </div>
        {showOptions && (
          <div className="card-body d-flex align-content-start w-100 p-0 m-0">
            <ul className="list-group list-group-horizontal d-flex align-items-center justify-content-between flex-wrap ">
              <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
                <select
                  className="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="priority">
                  <PriorityOptions selected="" />
                </select>
              </li>
              <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
                <select
                  className="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="place">
                  <PlaceOptions />
                </select>
              </li>
              <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
                <select
                  className="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="type">
                  <TypeOptions />
                </select>
              </li>
              <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
                <select
                  className="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="energy">
                  <EnergyOptions />
                </select>
              </li>
              <li className="list-group-item px-3 d-flex rouned-0 border-0 bg-transparent">
                <input
                  name="dueDate"
                  type="datetime-local"
                  className="form-control"
                  onChange={handleSelectOptionChange}></input>
              </li>
              <li className="list-group-item px-3 d-flex rouned-0 border-0 bg-transparent">
                <select
                  className="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="time">
                  <TimeOptions />
                </select>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddTask;
