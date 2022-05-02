import { storeState } from '../index';

export const getPreferences = (state: storeState) => state.preferences;
export const checkLight = (state: storeState) => state.preferences.light;
