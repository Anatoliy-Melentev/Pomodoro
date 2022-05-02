import { storeState } from '../index';
import { getDay } from '../../utils/js/getDay';
import { getCurSeconds } from '../../utils/js/getCurSeconds';

export const checkStatistics = (state: storeState) => !!state.statistics[getDay(getCurSeconds())];
export const selectStatistics = (id: number) => (state: storeState) => state.statistics[id] || {
  id, tomato: 0, totalDT: 0, pauseDT: 0, tomatoDT: 0, stopTimes: 0,
};
