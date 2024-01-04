import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Fullcalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../actions/updateTasks";
import useMessage from "./hooks/useMessage";
import EnergyOptions from "./options/EnergyOptions";
import PlaceOptions from "./options/PlaceOptions";
import PriorityOptions from "./options/PriorityOptions";
import TimeOptions from "./options/TimeOptions";
import TypeOptions from "./options/TypeOptions";

const CalendarPage = ({ showMenu }) => {
  const tasks = useSelector((state) => state.toDo.toDo);
  const [showModal, setShowModal] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({
    title: "",
    extendedProps: {
      priority: "",
    },
  });
  const eventsArray = [];
  const dispatch = useDispatch();
  const message = useMessage();
  const smallScreenToolbar = {
    start: "dayGridMonth,timeGridWeek,timeGridDay",
    end: "today,prev,next",
  };
  const bigScreenToolbar = {
    start: "dayGridMonth,timeGridWeek,timeGridDay",
    center: "title",
    end: "today,prev,next",
  };

  {
    tasks &&
      (eventsArray.events = tasks.toDo.filter((task) => {
        if (task.dueDate)
          return {
            title: task.task,
            start: task.dueDate,
            end: task.endDate,
            _id: task._id,
            createDate: task.createDate,
            priority: task.priority,
            place: task.place,
            type: task.type,
            energy: task.energy,
            time: task.time,
            finished: task.finished,
          };
      }));
  }

  const AllEvents = eventsArray.events.map((event) => ({
    title: event.task,
    start: event.dueDate,
    end: event.endDate,
    _id: event._id,
    createDate: event.createDate,
    priority: event.priority,
    place: event.place,
    type: event.type,
    energy: event.energy,
    time: event.time,
    finished: event.finished,
  }));

  const handleEventClick = (event) => {
    setClickedEvent(event.event._def);
    setShowModal(true);
  };

  const handleMouseEnter = (event) => {
    event.el.classList.add("cursor-pointer");
  };

  const handleMouseLeave = (event) => {
    event.el.classList.remove("cursor-pointer");
  };

  const handleSelectOptionChange = (e) => {
    setClickedEvent({
      ...clickedEvent,
      extendedProps: {
        ...clickedEvent.extendedProps,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSaveButton = () => {
    dispatch(updateTask(clickedEvent._id, clickedEvent));
    message("success", "Task edited!");
    setShowModal(false);
  };

  return (
    <div className="m-sm-5 mx-1 my-5">
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={showMenu ? bigScreenToolbar : smallScreenToolbar}
        height={"80vh"}
        events={AllEvents}
        eventColor="black"
        eventClick={handleEventClick}
        eventMouseEnter={handleMouseEnter}
        eventMouseLeave={handleMouseLeave}
        dayMaxEventRows={true}
        views={{
          timeGridPlugin: {
            dayMaxEventRows: 1,
            nowIndicator: true,
          },
        }}
      />

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>{clickedEvent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul lassName="list-group list-group-horizontal d-flex align-items-center justify-content-between flex-wrap ">
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent align-items-center justify-content-between">
              <label>Priority: </label>
              <select
                className="form-select my-1 custom-select-width"
                onChange={handleSelectOptionChange}
                name="priority">
                <PriorityOptions
                  selected={clickedEvent.extendedProps.priority}
                />
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent align-items-center justify-content-between">
              <label>Type: </label>
              <select
                className="form-select my-1 custom-select-width"
                onChange={handleSelectOptionChange}
                name="type">
                <TypeOptions selected={clickedEvent.extendedProps.type} />
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent align-items-center justify-content-between">
              <label>Place: </label>
              <select
                className="form-select my-1 custom-select-width"
                onChange={handleSelectOptionChange}
                name="place">
                <PlaceOptions selected={clickedEvent.extendedProps.place} />
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent align-items-center justify-content-between">
              <label>Energy: </label>
              <select
                className="form-select my-1 custom-select-width"
                onChange={handleSelectOptionChange}
                name="energy">
                <EnergyOptions selected={clickedEvent.extendedProps.energy} />
              </select>
            </li>
            <li className="list-group-item d-flex px-3 rouned-0 border-0 bg-transparent align-items-center justify-content-between">
              <label>Time: </label>
              <select
                className="form-select my-1  custom-select-width"
                onChange={handleSelectOptionChange}
                name="time">
                <TimeOptions selected={clickedEvent.extendedProps.time} />
              </select>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSaveButton}>
            Save
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarPage;
