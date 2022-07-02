import { CLEAR_TASK, CREATE_TASK, TASK_COMPLETE } from "../actionTypes";

export const CreateTask = (task) => {
  return {
    type: CREATE_TASK,
    payload: task,
  };
};

export const TaskComplete = (task) => {
  return {
    type: TASK_COMPLETE,
    payload: task,
  };
};

export const ClearTask = (currentUser) => {
  return {
    type: CLEAR_TASK,
    payload: currentUser,
  };
};
