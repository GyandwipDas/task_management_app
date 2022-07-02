import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../actionTypes";

const initialState = require("../../components/DB.json");

var index;

const logemailfinder = (email, password) => {
  let emailarr = [],
    passwordarr = [];
  for (let i of initialState.users) emailarr.push(i.email);
  for (let i of initialState.users) passwordarr.push(i.password);
  // console.log(emailarr);
  if (emailarr.includes(email)) {
    index = emailarr.indexOf(email);
    if (password === passwordarr[index]) {
      console.log(index);
      return 1;
    }
  }
  return 0;
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      if (logemailfinder(action.payload.email, action.payload.password)) {
        return {
          ...state,
          message: "Login Successful!",
          currentUser: state.users[index],
        };
      } else {
        return {
          ...state,
          message: "Login Failure!",
        };
      }
    case LOGOUT_REQUEST:
      if (logemailfinder(action.payload.email)) {
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
    default:
      return state;
  }
};

export default loginReducer;

// const demo = (email) => {
//   if (emailfinder(email)) {
//     initialState = {
//       ...initialState,
//       message: "login success",
//       currentUser: initialState.users[index],
//     };
//     console.log("success");
//     // console.log(i.email, i.username);
//   } else {
//     initialState = {
//       ...initialState,
//       message: "login fail",
//       currentUser: "",
//     };
//     console.log("fail");
//   }
//   if (emailfinder(email)) {
//     initialState = {
//       ...initialState,
//       message: "Logout Successful!",
//       currentUser: "",
//     };
//   } else {
//     initialState = {
//       ...initialState,
//       message: "Logout fail!",
//     };
//   }
// };

// demo("dasgyandwip@gail.com");
// console.log(initialState);
