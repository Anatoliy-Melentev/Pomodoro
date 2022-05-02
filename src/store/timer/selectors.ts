import { storeState } from '../index';

export const selectStartTime = (state: storeState) => state.timer.startDT;
export const selectPauseTime = (state: storeState) => state.timer.pauseDT;
export const selectStage = (state: storeState) => state.timer.workStage;
export const selectBreakType = (state: storeState) => state.timer.countBreaks === 3;
