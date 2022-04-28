import { Reducer } from 'redux';
import { getCurSeconds } from '../../utils/js/getCurSeconds';
import {
  SET_START_TIME, ADD_START_TIME, SET_PAUSE_TIME, CLEAR_ALL_TIME, CHANGE_STAGE, ADD_MORE_START_TIME,
} from './actions';
import { SET_COUNT_BREAKS } from '../preferences/actions';

export interface ITimer {
  startDT: number;
  pauseDT: number;
  workStage: boolean;
  countBreaks: number;
}

type TAction = {
  type: string;
  payload: {
    additingTime: number;
    countBreaks: number;
    stage: boolean;
  }
}

const initialState = {
  startDT: 0,
  pauseDT: 0,
  workStage: true,
  countBreaks: 4,
};

export const timerReducer: Reducer<ITimer, TAction> = (
  storeState = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_START_TIME: {
      return { ...storeState, startDT: getCurSeconds() };
    }
    case ADD_START_TIME: {
      return {
        ...storeState,
        startDT: storeState.startDT + getCurSeconds() - storeState.pauseDT,
        pauseDT: 0,
      };
    }
    case ADD_MORE_START_TIME: {
      return {
        ...storeState,
        startDT: storeState.startDT + payload.additingTime,
      };
    }
    case SET_PAUSE_TIME: {
      return { ...storeState, pauseDT: getCurSeconds() };
    }
    case CLEAR_ALL_TIME: {
      return { ...storeState, pauseDT: 0, startDT: 0 };
    }
    case SET_COUNT_BREAKS: {
      return { ...storeState, countBreaks: payload.countBreaks };
    }
    case CHANGE_STAGE: {
      const count = storeState.countBreaks < payload.countBreaks ? storeState.countBreaks + 1 : 1;
      return {
        ...storeState,
        workStage: !storeState.workStage,
        countBreaks: storeState.workStage ? count : storeState.countBreaks,
      };
    }
    default:
      return storeState;
  }
};
