import { Reducer } from 'redux';
import { SET_EDIT_MODE, SET_SORT, DELETE_SORT } from './actions';

export interface IEditMode {
  editingId: number;
  sort: number[];
}

type TAction = {
  type: string;
  payload: { id: number; position?: number; };
}

const initialState = {
  editingId: 0,
  sort: [],
};

export const editModeReducer: Reducer<IEditMode, TAction> = (
  storeState = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_EDIT_MODE: {
      return { ...storeState, editingId: payload.id };
    }
    case SET_SORT: {
      const sort = storeState.sort.filter((id) => id !== payload.id);
      sort.splice(typeof payload.position === 'number' ? payload.position : sort.length, 0, payload.id);
      return { ...storeState, sort };
    }
    case DELETE_SORT: {
      const sort = storeState.sort.filter((id) => id !== payload.id);
      return { ...storeState, sort };
    }
    default:
      return storeState;
  }
};
