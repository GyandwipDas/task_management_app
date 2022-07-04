import React from "react";
import "./userHome.css";
import Footer from "../footer/footer";
import store from "../../redux/store";
import Header from "../header/header";
import { CreateTask, TaskComplete } from "../../redux";
import { useNavigate, Link } from "react-router-dom";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currStore = store.getState(),
  date = new Date(),
  todaysDate =
    date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();

const getMonthStats = () => {
  currStore = store.getState();
  let taskcomp = 0,
    tottasks = 0;
  currStore.user.currentUser.tasks.map((e) => {
    if (
      new Date(e.date).getMonth() == new Date().getMonth() &&
      e.status == "complete"
    )
      taskcomp++;
    if (new Date(e.date).getMonth() == new Date().getMonth()) tottasks++;
  });
  return parseInt((taskcomp / tottasks) * 100);
};

const getWeekStats = () => {
  currStore = store.getState();
  let taskcomp = 0,
    tottasks = 0,
    firstDayOfWeek = date.getDate() - date.getDay(),
    lastDayOfWeek = firstDayOfWeek + 6,
    totTasks = 0,
    compTasks = 0;
  // (firstDayOfWeek = new Date(firstDayOfWeek)),
  //   (lastDayOfWeek = new Date(lastDayOfWeek));
  let first = new Date(firstDayOfWeek),
    last = new Date(lastDayOfWeek);
  console.log(first, last);
  currStore.user.currentUser.tasks.map((e) => {
    if (
      new Date(e.date).getMonth() == new Date().getMonth() &&
      e.status == "complete"
    )
      compTasks++;
    if (new Date(e.date).getMonth() == new Date().getMonth()) totTasks++;
  });
  return parseInt((compTasks / totTasks) * 100);
};

const UserHome = () => {
  currStore = store.getState();
  console.log("Logging in as ", currStore.user.currentUser.username);
  // document.getElementById("userName").innerHTML =
  //   "currStore.user.currentUser.username";

  var navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let task = event.target[0].value;
    let taskDueDate = event.target[1].value;
    event.target[0].value = "";
    event.target[1].value = "";
    // console.log(">>", task);
    store.dispatch(CreateTask(task, taskDueDate));
    navigate("../userhome");
  };

  const getStats = () => {
    let totalTasks = 0,
      completeTasks = 0;
    currStore = store.getState();
    currStore.user.currentUser.tasks.map((e) => {
      if (e.status === "complete") completeTasks++;
      totalTasks++;
    });
    return parseInt((completeTasks / totalTasks) * 100);
  };

  // const

  return (
    <div>
      <Header />
      <h3>Welcome, {currStore.user.currentUser.username}</h3>
      <br />
      <br />
      <div className="userHome-container">
        <div className="table-container">
          <table>
            <tr>
              <th>Task Sno.</th>
              <th>date</th>
              <th>Task</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Mark Done</th>
            </tr>
            {currStore.user.currentUser.tasks.map((e) => {
              return (
                <tr>
                  <td>{e.tid}</td>
                  <td>{e.date}</td>
                  <td>{e.task}</td>
                  <td>{e.status}</td>
                  <td>{e.dueDate}</td>
                  <td>
                    <input
                      type="checkbox"
                      onClick={(ev) => {
                        store.dispatch(TaskComplete(e.task, ev.target.checked));
                        navigate("../userhome");
                        console.log(ev.target.value);
                      }}
                      checked={e.status === "complete" ? "checked" : null}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <br />
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Add task: </label> &nbsp;
            <input type="text" id="newTask" />
            <br />
            <label>Add task due date(m/d/y): </label> &nbsp;
            <input
              type="text"
              id="newTaskDueDate"
              placeholder={todaysDate.toString()}
            />
            <br />
            <input type="submit" id="submitAddTask" />
          </form>
        </div>
        <div className="stats">
          <h2>
            Completed Tasks Percentage:{" "}
            <span className="percentage">{getStats()}%</span>
          </h2>
          <h2>
            {month[new Date().getMonth().toString()]}'s Stats:
            <span className="percentage">{getMonthStats()}%</span>
          </h2>
          <h2>
            This weeks Stats:
            <span className="percentage">{getWeekStats()}%</span>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;
