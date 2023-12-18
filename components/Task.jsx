import React, { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

import "@fortawesome/fontawesome-free/css/all.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../actions/deleteTask";
import { getTaskDone } from "../actions/getTaskDone";
import { updateTask } from "../actions/updateTasks";
import useMessage from "./hooks/useMessage";
import "./styles/Task.scss";

const Task = ({ singleTask }) => {
  const { finished, task, _id } = singleTask;

  const [editInput, setEditInput] = useState(task);
  const [finishTask, setFinishTask] = useState(false);
  const [editing, setEditing] = useState(false);
  const [prevTaskName, setPrevTaskName] = useState("");

  const message = useMessage();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const prevEditingRef = useRef(false);

  const inputElement = document.getElementById(_id);

  const handleClickOutside = (e) => {
    if (editing) {
      const inputElement = document.getElementById(_id);
      if (inputElement && !inputElement.contains(e.target)) {
        inputElement.disabled = true;
        document.body.removeEventListener("click", handleClickOutside);
        setEditing(false);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const taskName = inputRef.current.value;
      const objectToUpdate = {
        task: taskName,
      };
      dispatch(updateTask(_id, objectToUpdate));
      inputElement.disabled = true;
      setEditing(false);
      message("success", "Task edited");
    } else if (e.key === "Escape") {
      e.target.blur();
      inputElement.disabled = true;
      setEditInput(prevTaskName);
      setEditing(false);
    }
  };

  const handleFinishTaskChange = () => {
    setFinishTask((prev) => !prev);
    dispatch(getTaskDone(_id));
    setEditing(false);
  };
  const handleDeleteOnClick = () => {
    dispatch(deleteTask(_id));
  };

  const handleEditInputOnChange = (e) => {
    const newValue = e.target.value;
    setEditInput(newValue);
  };

  const handleEditOnClick = (e) => {
    e.stopPropagation();
    setPrevTaskName(task);
    if (!editing) {
      if (inputElement) {
        inputElement.disabled = false;
      }
      inputRef.current.focus();
      setEditing(true);
    }
  };

  useEffect(() => {
    if (finished === true) {
      setFinishTask(true);
    }
    if (editing) {
      document.body.addEventListener("click", handleClickOutside);
      inputElement.addEventListener("keydown", handleKeyDown);
      prevEditingRef.current = !prevEditingRef.current;
    } else if (prevEditingRef.current) {
      document.body.removeEventListener("click", handleClickOutside);
      inputElement.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [editing]);

  return (
    <ul className="task-item list-group list-group-horizontal rouned-0 p-1 mb-1">
      <li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rouned-0 border-0 bg-transparent">
        <div className="form-check">
          <input
            className="form-check-input me-0 ms-1"
            type="checkbox"
            value={finishTask}
            id="taskItemChecked"
            aria-label="..."
            onChange={handleFinishTaskChange}
            checked={finishTask}
          />
        </div>
      </li>
      <li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
        <input
          ref={inputRef}
          disabled={true}
          value={editInput}
          className="lead fw-normal mb-0 w-100 border-0"
          onChange={handleEditInputOnChange}
          id={_id}></input>
      </li>
      <li className="list-group-item ps-3 pe-0 py-1 me-3 rounded-0 border-0 bg-transparent">
        <div className="d-flex flex-row justify-content-end mb-1">
          <Link className="editTooltip text-info " onClick={handleEditOnClick}>
            <i className="fas fa-pen me-3 cursor-pointer"></i>
          </Link>
          <Link
            className="deleteTooltip text-danger"
            onClick={handleDeleteOnClick}
            data-toggle="tooltip"
            title="delete"
            overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
            <i className="fas fa-trash-can cursor-pointer"></i>
          </Link>
        </div>
        <div>
          <Link className="text-end text-muted">
            <p className="small mb-0">
              <i className="fas fa-info-circle me-2"></i>
              28th Jun 2023
            </p>
          </Link>
        </div>
      </li>
      <Tooltip
        className="tooltipClass"
        anchorSelect=".editTooltip"
        place="top"
        disableStyleInjection="core">
        Edit
      </Tooltip>
      <Tooltip
        className="tooltipClass"
        anchorSelect=".deleteTooltip"
        place="top">
        Delete
      </Tooltip>
    </ul>
  );
};

export default Task;
