import { storeState } from '../index';
import { getDay } from '../../utils/js/getDay';
import { getCurSeconds } from '../../utils/js/getCurSeconds';

export const selectEditingId = (state: storeState) => state.editMode.editingId;
export const selectSort = (state: storeState) => state.editMode.sort
  .filter((key) => getDay(getCurSeconds(Number(key))) === getDay(getCurSeconds()));
