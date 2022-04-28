import { ActionCreator } from 'redux';
import { ITask } from './reducer';

export const ADD_TASK = 'TASKS::ADD_TASK';

export type TAddTaskAction = {
  type: typeof ADD_TASK;
  payload: ITask;
};

export const addTask: ActionCreator<TAddTaskAction> = (id: number, name: string) => ({
  type: ADD_TASK,
  payload: {
    id, name, count: 1, isCompleted: false, countCompleted: 0,
  },
});

export const EDIT_TASK = 'TASKS::EDIT_TASK';

export type TEditTaskAction = {
  type: typeof EDIT_TASK;
  payload: { id: number, name: string };
};

export const editTask: ActionCreator<TEditTaskAction> = (id: number, name: string) => ({
  type: EDIT_TASK,
  payload: { id, name },
});

export const DELETE_TASK = 'TASKS::DELETE_TASK';

export type TDelTaskAction = {
  type: typeof DELETE_TASK;
};

export const deleteTask: ActionCreator<TDelTaskAction> = (id: string) => ({
  type: DELETE_TASK,
  payload: { id },
});

export const CHANGE_TIME_TASK = 'TASKS::CHANGE_TIME_TASK';

export type TChangeTimeTskAction = {
  type: typeof CHANGE_TIME_TASK;
  payload: { id: number, count: number },
};

export const changeTimeTask: ActionCreator<TChangeTimeTskAction> = (id: number, count: number) => ({
  type: CHANGE_TIME_TASK,
  payload: { id, count },
});

export const SET_COMPLETED_TASK = 'TASKS::SET_COMPLETED_TASK';

export type TSetCompletedTaskAction = {
  type: typeof SET_COMPLETED_TASK;
  payload: { id: number },
};

export const setCompleted: ActionCreator<TSetCompletedTaskAction> = (id: number) => ({
  type: SET_COMPLETED_TASK,
  payload: { id },
});

export const ADD_COMPLETED_COUNT = 'TASKS::ADD_COMPLETED_COUNT';

export type TAddCompletedCountAction = {
  type: typeof ADD_COMPLETED_COUNT;
  payload: { id: number },
};

export const addCompletedCount: ActionCreator<TAddCompletedCountAction> = (id: number) => ({
  type: ADD_COMPLETED_COUNT,
  payload: { id },
});
