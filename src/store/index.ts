import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { tasksReducer, ITask } from './task/reducer';
import { timerReducer, ITimer } from './timer/reducer';
import { editModeReducer, IEditMode } from './editMode/reducer';
import { statisticsReducer, IStatistics } from './statistics/reducer';
import { preferencesReducer, IPreferences } from './preferences/reducer';

export type storeState = {
  task: ITask,
  timer: ITimer,
  editMode: IEditMode;
  statistics: IStatistics;
  preferences: IPreferences;
};

const rootReducer = combineReducers({
  task: tasksReducer,
  timer: timerReducer,
  editMode: editModeReducer,
  statistics: statisticsReducer,
  preferences: preferencesReducer,
});

const persistConfig = {
  key: 'tasks',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware)),
);
export const persistor = persistStore(store);
