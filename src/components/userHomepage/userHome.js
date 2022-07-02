import React from "react";
import "./userHome.css";
import Footer from "../footer/footer";
import store from "../../redux/store";
import Header from "../header/header";
import { CreateTask, TaskComplete } from "../../redux";
import { useNavigate, Link } from "react-router-dom";

const UserHome = () => {
  let currStore = store.getState();
  console.log("Logging in as ", currStore.user.currentUser.username);
  // document.getElementById("userName").innerHTML =
  //   "currStore.user.currentUser.username";

  var navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let task = event.target[0].value;
    // console.log(">>", task);
    store.dispatch(CreateTask(task));
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
              <th>Mark Done</th>
            </tr>
            {currStore.user.currentUser.tasks.map((e) => {
              return (
                <tr>
                  <td>{e.tid}</td>
                  <td>{e.date}</td>
                  <td>{e.task}</td>
                  <td>{e.status}</td>
                  <td>
                    <input
                      type="checkbox"
                      onClick={(ev) => {
                        store.dispatch(TaskComplete(e.task, ev.target.checked));
                        navigate("../userhome");
                        console.log(ev.target.value);
                      }}
                    />
                  </td>
                </tr>
              );
            })}
          </table>
          <br />
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <label>Add task: </label> &nbsp; &nbsp;
            <input type="text" id="newTask" />
            &nbsp; &nbsp;
            <input type="submit" id="submitAddTask" />
          </form>
        </div>
        <div className="stats">
          <h2>
            Completed Tasks Percentage:{" "}
            <span className="percentage">{getStats()}%</span>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserHome;
