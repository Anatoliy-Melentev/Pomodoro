import { ActionCreator } from 'redux';

export const CREATE_RECORD = 'STATISTICS::CREATE_RECORD';

export type TCreateRecordAction = {
  type: typeof CREATE_RECORD;
};

export const createRecordStat: ActionCreator<TCreateRecordAction> = () => ({
  type: CREATE_RECORD,
});

export const ADD_TOTAL_TIME = 'STATISTICS::ADD_TOTAL_TIME';

export type TAddTotalTimeAction = {
  type: typeof ADD_TOTAL_TIME;
  payload: { totalDT: number };
};

export const addTotalTime: ActionCreator<TAddTotalTimeAction> = (totalDT: number) => ({
  type: ADD_TOTAL_TIME,
  payload: { totalDT },
});

export const ADD_TOMATO_TIME = 'STATISTICS::ADD_TOMATO_TIME';

export type TAddTomatoTimeAction = {
  type: typeof ADD_TOMATO_TIME;
  payload: { tomatoDT: number };
};

export const addTomatoTime: ActionCreator<TAddTomatoTimeAction> = (tomatoDT: number) => ({
  type: ADD_TOMATO_TIME,
  payload: { tomatoDT },
});

export const ADD_PAUSE_TIME = 'STATISTICS::ADD_PAUSE_TIME';

export type TAddPauseTimeAction = {
  type: typeof ADD_PAUSE_TIME;
  payload: { pauseDT: number };
};

export const addPauseTime: ActionCreator<TAddPauseTimeAction> = (pauseDT: number) => ({
  type: ADD_PAUSE_TIME,
  payload: { pauseDT },
});

export const ADD_STOP = 'STATISTICS::ADD_STOP';

export type TAddStopAction = {
  type: typeof ADD_STOP;
};

export const addStop: ActionCreator<TAddStopAction> = () => ({
  type: ADD_STOP,
});
