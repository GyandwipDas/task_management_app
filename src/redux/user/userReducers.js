import store from "../../redux/store";

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTRATION_REQUEST,
  CREATE_TASK,
  TASK_COMPLETE,
} from "../actionTypes";
const initialState = require("../../components/DB.json");

var index = null;
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const userReducer = (state = initialState, action) => {
  let emailarr = [];
  switch (action.type) {
    case REGISTRATION_REQUEST:
      emailarr = [];
      let redone = 0;
      for (let i of state.users) emailarr.push(i.email);
      console.log(emailarr, ">", action.payload.email);
      if (emailarr.includes(action.payload.email)) {
        index = emailarr.indexOf(action.payload.email);
        console.log(index);
        alert("Email exists! Try logining instead");
        redone = 0;
      } else redone = 1;
      if (redone === 0) {
        return {
          ...state,
          message: "Email Found! Try Signing in instead",
        };
      }
      if (redone === 1) {
        state.users[state.users.length] = {
          uid: ++state.numOfUsers,
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password,
          tasks: [],
        };
        return {
          ...state,
          message: "Registered Successfully!",
          currentUser: state.users[state.numOfUsers - 1],
        };
      }
    case LOGIN_REQUEST:
      let lidone = 0,
        passwordarr = [];
      emailarr = [];
      for (let i of state.users) emailarr.push(i.email);
      for (let i of state.users) passwordarr.push(i.password);
      if (emailarr.includes(action.payload.email)) {
        index = emailarr.indexOf(action.payload.email);
        if (action.payload.password === passwordarr[index]) {
          console.log(index);
          lidone = 1;
        } else if (action.payload.password !== passwordarr[index]) {
          console.log(index);
          lidone = 0;
          alert("Email and passwords don't match");
        }
      }
      if (!emailarr.includes(action.payload.email)) {
        alert("Email not found! Register instead");
        lidone = 0;
      }

      if (lidone === 1) {
        return {
          ...state,
          message: "Login Successful!",
          currentUser: state.users[index],
        };
      }
      if (lidone === 0) {
        return {
          ...state,
          message: "Login Failure!",
        };
      }
    case LOGOUT_REQUEST:
      let lodone = 0;
      emailarr = [];
      for (let i of state.users) emailarr.push(i.email);
      // console.log(emailarr);
      if (emailarr.includes(action.payload.email)) {
        index = emailarr.indexOf(action.payload.email);
        console.log(index);
        lodone = 1;
      } else lodone = 0;
      if (lodone === 1) {
        return {
          ...state,
          message: "Logout Successful!",
          currentUser: "",
        };
      } else {
        return {
          ...state,
          message: "Logout Failure!",
        };
      }
    case CREATE_TASK:
      let ctdone = 0,
        taskarr = [];
      for (let i of state.currentUser.tasks) taskarr.push(i.task);
      // console.log(">", taskarr);
      if (taskarr.includes(action.payload.task)) {
        ctdone = 0;
        alert("Task already exists!");
      }
      if (!taskarr.includes(action.payload.task)) {
        ctdone = 1;
      }
      if (ctdone === 1) {
        state.currentUser.tasks[state.currentUser.tasks.length] = {
          tid: state.currentUser.tasks.length + 1,
          task: action.payload.task,
          date: date,
          status: "incomplete",
          dueDate: action.payload.taskDueDate,
        };
        // state.users[state.currentUser.uid - 1] = state.currentUser;
        return {
          ...state,
          message: "Task Created successfully",
        };
      }
      if (ctdone === 0) {
        // console.log("Task found");
        return {
          ...state,
          message: "Task creation failed",
        };
      }

    case TASK_COMPLETE:
      let tcdone = 0;
      for (let i of state.currentUser.tasks) {
        if (action.payload.task === i.task) {
          if (action.payload.status === true) {
            i.status = "complete";
            tcdone = 1;
          } else {
            i.status = "incomplete";
            tcdone = 0;
          }
        }
      }
      if (tcdone === 1) {
        console.log("Task found. Marked complete");
        return {
          ...state,
          message: "Task marked complete",
        };
      } else {
        console.log("Task found. Marked incomplete");
        return {
          ...state,
          message: "Task marked incomplete",
        };
      }

    default:
      return state;
  }
};

export default userReducer;
