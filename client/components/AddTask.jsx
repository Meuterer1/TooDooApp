import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTask } from "../actions/addTask";
import useMessage from "./hooks/useMessage";

const AddTask = () => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [taskOptions, setTaskOptions] = useState({
    dueDate: "",
    priority: "",
    place: "",
    type: "",
    energy: "",
  });

  const message = useMessage();
  const dispatch = useDispatch();

  const createTask = () => {
    const currentDate = new Date();
    const { v4: uuidv4 } = require("uuid");
    const uniqueId = uuidv4();
    const uniqueIdString = uniqueId.replace(/-/g, "").slice(0, 24);

    const object = {
      _id: uniqueIdString,
      task: inputValue,
      createDate: currentDate.toLocaleString(),
      dueDate: taskOptions.dueDate,
      priority: taskOptions.priority,
      place: taskOptions.place,
      type: taskOptions.type,
      energy: taskOptions.energy,
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
    <section className="card d-flex align-items-center m-5 border-0">
      <div className="card-body w-100 d-flex">
        <div className="d-flex flex-row align-items-center w-100">
          <input
            className="form-control form-control-lg  "
            type="text"
            placeholder="Add new task.."
            onChange={handleInputOnChange}
            onKeyDown={handleKeyDown}
            value={inputValue}
            name="addTaskInput"
          />
          <Link
            className="link-dark"
            onClick={handleOptionsOnClick}
            data-toggle="tooltip"
            title="More Options">
            <i className="fa-solid fa-caret-down ms-3 cursor-pointer"></i>
          </Link>
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
                name="priority"
                value={taskOptions.priority}>
                <option disabled value="">
                  {" "}
                  -- Set Priority --{" "}
                </option>
                <option value={"high"}>High</option>
                <option value={"medium"}>Medium</option>
                <option value={"low"}>Low</option>
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
              <select
                className="form-select my-1"
                onChange={handleSelectOptionChange}
                name="place"
                value={taskOptions.place}>
                <option disabled value="">
                  {" "}
                  -- Choose a place --{" "}
                </option>
                <option value={"work"}>Work</option>
                <option value={"home"}>Home</option>
                <option value={"meantime"}>Meantime</option>
                <option value={"road"}>Road</option>
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
              <select
                className="form-select my-1"
                onChange={handleSelectOptionChange}
                name="type"
                value={taskOptions.type}>
                <option disabled value="">
                  {" "}
                  -- Select a type --{" "}
                </option>
                <option value={"strategy"}>Strategy</option>
                <option value={"research"}>Research</option>
                <option value={"hobby"}>Hobby</option>
                <option value={"comunication"}>Comunication</option>
                <option value={"production"}>Production</option>
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent">
              <select
                className="form-select my-1"
                onChange={handleSelectOptionChange}
                name="energy"
                value={taskOptions.energy}>
                <option disabled value="">
                  {" "}
                  -- Select the energy level --{" "}
                </option>
                <option value={"full"}>Full</option>
                <option value={"medium"}>Medium</option>
                <option value={"tired"}>Tired</option>
              </select>
            </li>
            <li className="list-group-item px-3 d-flex rouned-0 border-0 bg-transparent">
              {/* <label htmlFor="dateInput" className="pe-3 mt-2">
                Due date{" "}
              </label> */}
              <input
                name="dueDate"
                type="date"
                className="form-control"
                onChange={handleSelectOptionChange}></input>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default AddTask;
