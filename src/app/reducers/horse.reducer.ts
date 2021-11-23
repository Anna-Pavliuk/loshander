import { Action, createReducer, on } from '@ngrx/store';
import * as HorseActions from '../horse.actions';
import { Horse } from '../horse.model';

export interface State {
  horses: Horse[];
  favourites: Horse[];
  likes: Horse[];
  dislikes: Horse[];
}

export const initialState: State = {
  horses: [],
  favourites: [],
  likes: [],
  dislikes: [],
};

const horseReducer = createReducer(
  initialState,
  on(HorseActions.getHorsesSuccess, (state, { horses }) => ({ ...state, horses })),
  on(HorseActions.likeHorse, (state, { horse }) => ({
    ...state,
    horses: state.horses.filter(currentHorse => currentHorse.id !== horse.id),
    likes: [...state.likes, horse]
  })),
  on(HorseActions.favouriteHorse, (state, { horse }) => ({
    ...state,
    horses: state.horses.filter(currentHorse => currentHorse.id !== horse.id),
    favourites: [...state.favourites, horse]
  })),
  on(HorseActions.dislikeHorse, (state, { horse }) => ({
    ...state,
    horses: state.horses.filter(currentHorse => currentHorse.id !== horse.id),
    dislikes: [...state.dislikes, horse]
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return horseReducer(state, action);
}
