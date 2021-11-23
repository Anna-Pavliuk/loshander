import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action,
  combineReducers
} from '@ngrx/store';
import * as fromHorses from '../reducers/horse.reducer';

export interface State {
  allHorses: fromHorses.State;
}

export const reducers = {
  allHorses: fromHorses.reducer,
};
