import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMessage from "./hooks/useMessage";

const AddTask = ({ refreshTasks }) => {
  const [inputValue, setInputValue] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [taskOptions, setTaskOptions] = useState({
    dueDate: "",
    priority: "",
    place: "",
    type: "",
    energy: "",
  });
  const navigate = useNavigate();
  const message = useMessage();

  const createTask = () => {
    const currentDate = new Date();
    const object = {
      task: inputValue,
      createDate: currentDate.toLocaleString(),
      dueDate: taskOptions.dueDate,
      priority: taskOptions.priority,
      place: taskOptions.place,
      type: taskOptions.type,
      energy: taskOptions.energy,
      finished: false,
    };

    navigate(`/addtask/${inputValue}`);

    fetch("http://localhost:8080/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Odpowiedź serwera:", data);
        message("success", "Task added!");
        setInputValue("");
        refreshTasks();
        navigate(`/`);
      })
      .catch((error) => {
        console.error("Błąd podczas wysyłania żądania: ", error);
      });
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
      refreshTasks();
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
  };

  const handleOptionsOnClick = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <section className="d-flex justify-content-end pt-3 w-100">
      <div className="card d-flex align-items-center border-0 bg-light container-fluid px-5 pb-5 ">
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
                  class="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="priority">
                  <option disabled selected value>
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
                  class="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="place">
                  <option disabled selected value>
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
                  class="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="type">
                  <option disabled selected value>
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
                  class="form-select my-1"
                  onChange={handleSelectOptionChange}
                  name="energy">
                  <option disabled selected value>
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
      </div>
    </section>
  );
};

export default AddTask;
