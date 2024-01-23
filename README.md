# Task List

Live demo: https://stark-earth-03918-bae1ddc364db.herokuapp.com/#/

## Description
The project is a simple to-do list. Users can add tasks and (optionally) assign categories to them (priority, task location, task type, energy level required for execution, task duration, and deadline). 
When the "Add Task" button is clicked, the task is added to the state in the reducer. Data is sent to the database upon clicking the synchronization button.

Displaying data:
By default, the list of active tasks is displayed. Users can switch between completed or all tasks. Additionally, tasks can be filtered by the categories mentioned above. 
On the task list page, a task can be deleted and edited (but only its name). Tasks can be rearranged on the list using drag and drop.

Tasks can also be viewed in a calendar - clicking on a task opens task details with the ability to edit.

## Purpose
It was created for the purpose of learning the redux and javascript libraries. 

## Tech

* React
* Javascript
* Redux
* FullCalendar

## RUN
- npm istall
- npm start
