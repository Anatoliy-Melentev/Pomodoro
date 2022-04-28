import { storeState } from '../index';

export const selectTasks = (state: storeState) => state.task;
