import store from "../../redux/store";
const initialState = require("../../components/DB.json");
const { TASK_COMPLETE, CREATE_TASK } = require("../actionTypes");
// const fs = require("fs");
var today = new Date();
var date =
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

const taskReducer = (state = initialState, action) => {
  const taskFinder = (task, operation) => {
    let i;
    // currStore = store.getState();
    for (i of state.currnetUser.tasks) {
      if (task.toLowerCase() === i.task.toLowerCase()) {
        if (operation === "create") return 1;
        if (operation === "complete") i.status = "complete";
        // if (operation === "clear") i.status = "clear";
      }
    }
  };
  switch (action.type) {
    case CREATE_TASK:
      if (taskFinder(action.payload.task, "create")) {
        state.currentUser.tasks[state.currentUser.tasks.length] = {
          tid: state.currentUser.tasks.length + 1,
          task: action.payload.task,
          data: date,
          status: "incomplete",
        };
        state.users[state.currentUser.uid - 1] = state.currentUser;
        return {
          ...state,
          message: "Task Created successfully",
        };
      } else {
        console.log("Task found");
        return {
          ...state,
          message: "Task was found. Task creation failed",
        };
      }

    case TASK_COMPLETE:
      let i;
      var done = 0;
      // currStore = store.getState();
      console.log(state);
      for (i of state.currentUser.tasks) {
        if (action.payload.task.toLowerCase() === i.task.toLowerCase()) {
          i.status = "complete";
          done = 1;
          // if (operation === "clear") i.status = "clear";
        }
      }
      if (done === 1) {
        console.log("Task found. Marked done");
        return {
          ...state,
          message: "Task marked done successfully",
        };
      } else {
        console.log("Task not found.");
        return {
          ...state,
          message: "Task was not found. Task marked done failed",
        };
      }
    // case CLEAR_TASK:
    //   if (taskFinder(action.payload.task, state.currentUser.tasks, "clear")) {
    //     console.log("Task found. Cleared");
    //     return {
    //       ...state,
    //       message: "Task cleared successfully",
    //     };
    //   } else {
    //     console.log("Task not found.");
    //     return {
    //       ...state,
    //       message: "Task was not found. Task marked clear failed",
    //     };
    //   }
    default:
      return state;
  }
};

export default taskReducer;

// var currentUser = initialState.currentUser;
// {
//   uid: 1,
//   username: "Gyandwip Das",
//   email: "dasgyandwip@gmail.com",
//   password: "gyandwip",
//   tasks: [
//     {
//       tid: 1,
//       task: "meditate",
//       date: "29-06-2022",
//       status: "complete",
//     },
//     {
//       tid: 2,
//       task: "workout",
//       date: "29-06-2022",
//       status: "incomplete",
//     },
//   ],
// };

// const demo = (task) => {
//   console.log(currentUser.tasks.length);
//   currentUser.tasks[currentUser.tasks.length] = {
// ...currentUser.tasks,
//     tid: currentUser.tasks.length + 1,
//     task: task,
//     date: date,
//     status: "incomplete",
//   };

//   initialState.users[currentUser.uid - 1] = currentUser;
//   initialState.currentUser = currentUser;
//   fs.writeFileSync("../../components/DB.json", JSON.stringify(initialState));
//   console.log("CURRENT USER", currentUser);
// };
// demo("eat lunch");

// const taskFinder = (task) => {
//   let i,
//     tasks = [],
//     f = 0;
//   for (i of currentUser.tasks) {
//     // tasks.push(i.task);
//     if (task === i.task) {
//       console.log("F");
//       i.status = "done";
//       //   i = "done";
//       f = 1;
//       break;
//     }
//   }
//   if (f === 0) console.log("nf");
//   console.log(currentUser);
// };

// taskFinder("workout");
