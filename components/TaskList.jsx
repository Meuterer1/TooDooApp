import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UpdateDroppedTasks } from "../actions/updateDroppedTasks";
import Task from "./Task";
import useSynchronise from "./hooks/useSynchronise";

import useFilter from "./hooks/useFilter";

const TaskList = ({ filterBy }) => {
  let appTasks = useSelector((state) => state.toDo);
  let allTasks = appTasks.toDo;
  let filteredTasks;

  const dispatch = useDispatch();

  const [filterTasks, setFilterTasks] = useState({
    priority: "all",
    place: "all",
    type: "all",
    energy: "all",
  });

  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState(null);
  const [placeFilter, setPlaceFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [energyFilter, setEnergyFilter] = useState(null);

  {
    allTasks.toDo && (filteredTasks = allTasks.toDo.filter((item) => item));
  }

  const filTasks = useFilter();

  const synchronise = useSynchronise();

  const handleSynchroniseButtonClick = () => {
    synchronise(appTasks);
  };

  const handleFilterButtonClick = () => {
    setShowFilterOptions(!showFilterOptions);
  };

  const handleFilterOptionsOnClick = (e, filterSetter) => {
    setFilterTasks({
      ...filterTasks,
      [e.target.name]: e.target.value,
    });
    filterSetter(e.target.value);
  };

  const handleResetButtonClick = () => {
    setFilterTasks({
      priority: "all",
      place: "all",
      type: "all",
      energy: "all",
    });
    setPriorityFilter(null);
    setPlaceFilter(null);
    setTypeFilter(null);
    setEnergyFilter(null);
  };

  {
    filteredTasks &&
      (filteredTasks = filTasks(filterTasks, filteredTasks)) &&
      (filteredTasks = filteredTasks.filter((task) => {
        if (filterBy === "active") {
          return !task.finished;
        } else if (filterBy === "completed") {
          return task.finished;
        }
        return true;
      }));
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(filteredTasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(UpdateDroppedTasks(items));
  };

  return (
    <>
      <div className="d-flex w-100 justify-content-end pe-3 pe-xl-5 pb-3">
        <Link
          className="link-dark px-2"
          data-toggle="tooltip"
          data-placement="top"
          title="Synchronise"
          id="synchroniseLink"
          onClick={handleSynchroniseButtonClick}>
          <i className="fa-solid fa-arrows-rotate"></i>
        </Link>
        <button
          className="px-2 border-0 bg-transparent"
          onClick={handleFilterButtonClick}>
          <i
            className="fa-solid fa-filter"
            data-toggle="tooltip"
            title="Filter"></i>
        </button>
      </div>
      {showFilterOptions && (
        <div className="mx-sm-5 mx-3 mb-3 d-flex justify-content-end">
          <ul className="nav nav-items d-flex justify-content-start col-10 p-3 rounded">
            <li className="nav-item d-flex flex-column me-3">
              <h4 className="px-2">Priority</h4>
              <div className="d-flex flex-column flex-md-row">
                <button
                  value={"high"}
                  name="priority"
                  className={`btn btn-danger m-2 ${
                    priorityFilter === "high" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPriorityFilter)
                  }>
                  High
                </button>
                <button
                  value={"medium"}
                  name="priority"
                  className={`btn btn-primary m-2 ${
                    priorityFilter === "medium" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPriorityFilter)
                  }>
                  Medium
                </button>
                <button
                  value={"low"}
                  name="priority"
                  className={`btn btn-success m-2 ${
                    priorityFilter === "low" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPriorityFilter)
                  }>
                  Low
                </button>
              </div>
            </li>
            <li className="nav-item d-flex flex-column me-3">
              <h4 className="px-2">Place</h4>
              <div className="d-flex flex-column flex-md-row">
                <button
                  value={"work"}
                  name="place"
                  className={`btn btn-outline-dark m-2 ${
                    placeFilter === "work" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPlaceFilter)
                  }>
                  Work
                </button>
                <button
                  value={"home"}
                  name="place"
                  className={`btn btn-outline-dark m-2 ${
                    placeFilter === "home" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPlaceFilter)
                  }>
                  Home
                </button>
                <button
                  value={"meantime"}
                  name="place"
                  className={`btn btn-outline-dark m-2 ${
                    placeFilter === "meantime" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPlaceFilter)
                  }>
                  Meantime
                </button>
                <button
                  value={"road"}
                  name="place"
                  className={`btn btn-outline-dark m-2 ${
                    placeFilter === "road" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setPlaceFilter)
                  }>
                  Road
                </button>
              </div>
            </li>
            <li className="nav-item d-flex flex-column me-3">
              <h4 className="px-2">Energy</h4>
              <div className="d-flex flex-column flex-md-row">
                <button
                  value={"full"}
                  name="energy"
                  className={`btn btn-outline-dark m-2 ${
                    energyFilter === "full" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setEnergyFilter)
                  }>
                  Full
                </button>
                <button
                  value={"medium"}
                  name="energy"
                  className={`btn btn-outline-dark m-2 ${
                    energyFilter === "medium" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setEnergyFilter)
                  }>
                  Medium
                </button>
                <button
                  value={"tired"}
                  name="energy"
                  className={`btn btn-outline-dark m-2 ${
                    energyFilter === "tired" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleFilterOptionsOnClick(e, setEnergyFilter)
                  }>
                  Tired
                </button>
              </div>
            </li>
            <li className="nav-item d-flex flex-column me-3">
              <h4 className="px-2">Type</h4>
              <div className="d-flex flex-column flex-md-row">
                <button
                  value={"strategy"}
                  name="type"
                  className={`btn btn-outline-dark m-2 ${
                    typeFilter === "strategy" ? "active" : ""
                  }`}
                  onClick={(e) => handleFilterOptionsOnClick(e, setTypeFilter)}>
                  Strategy
                </button>
                <button
                  value={"research"}
                  name="type"
                  className={`btn btn-outline-dark m-2 ${
                    typeFilter === "research" ? "active" : ""
                  }`}
                  aria-pressed="true"
                  onClick={(e) => handleFilterOptionsOnClick(e, setTypeFilter)}>
                  Research
                </button>
                <button
                  value={"hobby"}
                  name="type"
                  className={`btn btn-outline-dark m-2 ${
                    typeFilter === "hobby" ? "active" : ""
                  }`}
                  onClick={(e) => handleFilterOptionsOnClick(e, setTypeFilter)}>
                  Hobby
                </button>
                <button
                  value={"comunication"}
                  name="type"
                  className={`btn btn-outline-dark m-2 ${
                    typeFilter === "comunication" ? "active" : ""
                  }`}
                  onClick={(e) => handleFilterOptionsOnClick(e, setTypeFilter)}>
                  Comunication
                </button>
                <button
                  value={"production"}
                  name="type"
                  className={`btn btn-outline-dark m-2 ${
                    typeFilter === "production" ? "active" : ""
                  }`}
                  onClick={(e) => handleFilterOptionsOnClick(e, setTypeFilter)}>
                  Production
                </button>
              </div>
            </li>
          </ul>
          <div className="col-2 d-md-flex gap-2 justify-content-md-end my-1">
            <button
              className="btn btn-dark align-self-start my-5"
              onClick={handleResetButtonClick}>
              Reset fiters
            </button>
          </div>
        </div>
      )}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div
              className="tasks px-sm-5 px-3 mb-5"
              {...provided.droppableProps}
              ref={provided.innerRef}>
              {filteredTasks
                ? filteredTasks.map((task, index) => (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}>
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}>
                          <Task singleTask={task} key={index} />
                        </div>
                      )}
                    </Draggable>
                  ))
                : appTasks.toDo.map((item, index) => (
                    <Task singleTask={item} key={item._id} />
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TaskList;
