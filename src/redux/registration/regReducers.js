const initialState = require("../../components/DB.json");
const { REGISTRATION_REQUEST } = require("../actionTypes");
// const { default: addUser } = require("./addUser");

var index;

const emailfinder = (email) => {
  let emailarr = [];
  for (let i of initialState.users) emailarr.push(i.email);
  // console.log(emailarr);
  if (emailarr.includes(email)) {
    index = emailarr.indexOf(email);
    console.log(index);
    return 1;
  } else return 0;
};

// const addUser = (username, email, password) => {
//   // let myObj = JSON.parse(initialState);
//   initialState = {
//     uid: ++initialState.numOfUsers,
//     username: username,
//     email: email,
//     password: password,
//     tasks: [],
//   };
// };

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      if (emailfinder(action.payload.email)) {
        return {
          ...state,
          message: "Email Found! Try Signing in instead",
        };
      } else {
        // addUser(
        //   action.payload.username,
        //   action.payload.email,
        //   action.payload.password
        // );
        state.users[state.users.length] = {
          uid: ++initialState.numOfUsers,
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password,
          tasks: [],
        };
        return {
          ...state,
          message: "Registered Successfully!",
          currentUser: state.users[index],
        };
      }
    // case REGISTRATION_SUCCESS:
    //   return {
    //     ...state,
    //     message: action.payload,
    //   };
    // case REGISTRATION_FAILURE:
    //   return {
    //     ...state,
    //     message: action.payload,
    //   };
    default:
      return state;
  }
};

export default registerReducer;
