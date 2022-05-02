import { ActionCreator } from 'redux';

export const SET_EDIT_MODE = 'EDIT_TASK::SET_EDIT_MODE';

export type TSetEditModeAction = {
  type: typeof SET_EDIT_MODE;
  payload: {
    id: number;
    position?: number;
  }
};

export const setEditMode: ActionCreator<TSetEditModeAction> = (id: number) => ({
  type: SET_EDIT_MODE,
  payload: { id },
});

export const SET_SORT = 'EDIT_TASK::SET_SORT';

export type TSetSortAction = {
  type: typeof SET_SORT;
  payload: {
    id: number;
    position: number;
  };
};

export const setSort: ActionCreator<TSetSortAction> = (id: number, position: number) => ({
  type: SET_SORT,
  payload: { id, position },
});

export const DELETE_SORT = 'EDIT_TASK::DELETE_SORT';

export type TDeleteSortAction = {
  type: typeof DELETE_SORT;
  payload: {
    id: number;
  };
};
export const deleteSort: ActionCreator<TDeleteSortAction> = (id: number) => ({
  type: DELETE_SORT,
  payload: { id },
});
