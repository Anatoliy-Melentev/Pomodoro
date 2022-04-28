import { ActionCreator } from 'redux';

export const SET_WORK_TIME = 'PREFERENCES::SET_WORK_TIME';

export type TSetWorkTimeAction = {
  type: typeof SET_WORK_TIME;
  payload: { workTimeOut: number };
};

export const setWorkTime: ActionCreator<TSetWorkTimeAction> = (workTimeOut: number) => ({
  type: SET_WORK_TIME,
  payload: { workTimeOut },
});

export const SET_ADD_TIME = 'PREFERENCES::SET_ADD_TIME';

export type TSetAddTimeAction = {
  type: typeof SET_ADD_TIME;
  payload: { additingTime: number };
};

export const setAddTime: ActionCreator<TSetAddTimeAction> = (additingTime: number) => ({
  type: SET_ADD_TIME,
  payload: { additingTime },
});

export const SET_BREAK_TIME = 'PREFERENCES::SET_BREAK_TIME';

export type TSetBreakTimeAction = {
  type: typeof SET_BREAK_TIME;
  payload: { breakTimeOut: number };
};

export const setBreakTime: ActionCreator<TSetBreakTimeAction> = (breakTimeOut: number) => ({
  type: SET_BREAK_TIME,
  payload: { breakTimeOut },
});

export const SET_LONG_TIME = 'PREFERENCES::SET_LONG_TIME';

export type TSetLongTimeAction = {
  type: typeof SET_LONG_TIME;
  payload: { longTimeOut: number };
};

export const setLongTime: ActionCreator<TSetLongTimeAction> = (longTimeOut: number) => ({
  type: SET_LONG_TIME,
  payload: { longTimeOut },
});

export const SET_COUNT_BREAKS = 'PREFERENCES::SET_COUNT_BREAKS';

export type TSetCountBreakAction = {
  type: typeof SET_COUNT_BREAKS;
  payload: { countBreaks: number };
};

export const setCountBreaks: ActionCreator<TSetCountBreakAction> = (countBreaks: number) => ({
  type: SET_COUNT_BREAKS,
  payload: { countBreaks },
});

export const SET_SOUND = 'PREFERENCES::SET_SOUND';

export type TSetSoundAction = {
  type: typeof SET_SOUND;
  payload: { sound: string };
};

export const setSound: ActionCreator<TSetSoundAction> = (sound: string) => ({
  type: SET_SOUND,
  payload: { sound },
});

export const SET_NOTIFY = 'PREFERENCES::SET_NOTIFY';

export type TSetNotifyAction = {
  type: typeof SET_NOTIFY;
  payload: { notify: number },
};

export const setNotify: ActionCreator<TSetNotifyAction> = (notify: number) => ({
  type: SET_NOTIFY,
  payload: { notify },
});

export const SET_LIGHT = 'PREFERENCES::SET_LIGHT';

export type TSetLightAction = {
  type: typeof SET_LIGHT;
};

export const setLight: ActionCreator<TSetLightAction> = () => ({
  type: SET_LIGHT,
});