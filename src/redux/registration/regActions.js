import { REGISTRATION_REQUEST } from "../actionTypes";

export const RegRequest = (username, email, password) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: { username, email, password },
  };
};

// export const RegSuccess = () => {
//   return {
//     type: REGISTRATION_SUCCESS,
//     payload: "Registered Successfully!",
//   };
// };

// export const RegFailure = () => {
//   return {
//     type: REGISTRATION_FAILURE,
//     payload: "Registeration Failed!",
//   };
// };
