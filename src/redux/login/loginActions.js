import { LOGIN_REQUEST, LOGOUT_REQUEST } from "../actionTypes";

export const LoginRequest = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: { email, password },
  };
};

export const LogoutRequest = (email, password) => {
  return {
    type: LOGOUT_REQUEST,
    payload: { email, password },
  };
};

// export const LoginSuccess = (email, password) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: "Logged in Successfully!",
//   };
// };

// export const LoginFail = (email, password) => {
//   return {
//     type: LOGIN_FAILURE,
//     payload: "Login Failed!",
//   };
// };
