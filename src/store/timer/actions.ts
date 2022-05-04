import { ActionCreator } from 'redux';

export const SET_START_TIME = 'TIMER::SET_START_TIME';

export type TSetStartTimeAction = {
  type: typeof SET_START_TIME;
};

export const setStartTime: ActionCreator<TSetStartTimeAction> = () => ({
  type: SET_START_TIME,
});

export const ADD_START_TIME = 'TIMER::ADD_START_TIME';

export type TAddStartTimeAction = {
  type: typeof ADD_START_TIME;
};

export const addStartTime: ActionCreator<TAddStartTimeAction> = () => ({
  type: ADD_START_TIME,
});

export const ADD_MORE_START_TIME = 'TIMER::ADD_MORE_START_TIME';

export type TAddMoreStartTimeAction = {
  type: typeof ADD_MORE_START_TIME;
  payload: { additingTime: number };
};

export const addMoreTime: ActionCreator<TAddMoreStartTimeAction> = (additingTime: number) => ({
  type: ADD_MORE_START_TIME,
  payload: { additingTime },
});

export const SET_PAUSE_TIME = 'TIMER::SET_PAUSE_TIME';

export type TSetPauseTimeAction = {
  type: typeof SET_PAUSE_TIME;
};

export const setPauseTime: ActionCreator<TSetPauseTimeAction> = () => ({
  type: SET_PAUSE_TIME,
});

export const CLEAR_ALL_TIME = 'TIMER::CLEAR_ALL_TIME';

export type TClearAllTimeAction = {
  type: typeof CLEAR_ALL_TIME;
};

export const clearAllTime: ActionCreator<TClearAllTimeAction> = () => ({
  type: CLEAR_ALL_TIME,
});

export const CHANGE_STAGE = 'TIMER::CHANGE_STAGE';

export type TChangeStageAction = {
  type: typeof CHANGE_STAGE;
  payload: { countBreaks: number };
};

export const changeStage: ActionCreator<TChangeStageAction> = (countBreaks: number) => ({
  type: CHANGE_STAGE,
  payload: { countBreaks },
});

export const SET_COUNT_BREAKS = 'PREFERENCES::SET_COUNT_BREAKS';

export type TSetCountBreakAction = {
  type: typeof SET_COUNT_BREAKS;
  payload: { countBreaks: number };
};

export const setBaseCountBreaks: ActionCreator<TSetCountBreakAction> = (countBreaks: number) => ({
  type: SET_COUNT_BREAKS,
  payload: { countBreaks },
});

export const SET_START_PREFERENCES = 'TIMER::SET_START_PREFERENCES';

export type TSetStartPreferAction = {
  type: typeof SET_START_PREFERENCES;
  payload: { countBreaks: number };
};

export const setStartPreferences: ActionCreator<TSetStartPreferAction> = (countBreaks: number) => ({
  type: SET_START_PREFERENCES,
  payload: { countBreaks },
});
