import { createAction, props } from '@ngrx/store';
import { Horse } from './horse.model';

export const getHorses = createAction('[Horses] Get Horses');

export const getHorsesSuccess = createAction(
  '[Horses] Get Horses Success',
  props<{ horses: any[] }>()
);

export const likeHorse = createAction(
  '[Horses] Like Horse',
  props<{ horse: Horse }>()
);

export const favouriteHorse = createAction(
  '[Horses] Favourite Horse',
  props<{ horse: Horse }>()
);

export const dislikeHorse = createAction(
  '[Horses] Dislike Horse',
  props<{ horse: Horse }>()
);
