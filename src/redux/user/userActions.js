import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTRATION_REQUEST,
  CREATE_TASK,
  TASK_COMPLETE,
} from "../actionTypes";

export const RegRequest = (email, username, password) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: { email, username, password },
  };
};

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

export const CreateTask = (task, taskDueDate) => {
  return {
    type: CREATE_TASK,
    payload: { task, taskDueDate },
  };
};

export const TaskComplete = (task, status) => {
  return {
    type: TASK_COMPLETE,
    payload: { task, status },
  };
};
