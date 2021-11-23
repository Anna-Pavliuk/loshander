import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HorseService } from './horse.service';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap} from 'rxjs/operators';
import * as horseActions from './horse.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private horseService: HorseService) {}

  getHorses$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Horses] Get Horses'),
      mergeMap(() => {
        return this.horseService.getData().pipe(
          tap(console.log),
          map((res: any[]) =>
          horseActions.getHorsesSuccess({ horses: res.map(elem => {
              const container: any = {};
              container.id = elem.position;
              container.original = elem.original;
              return container;
            })})
          ),
          tap(val => console.log(val)),
          catchError(() => EMPTY)
        );
      })
    )
  );
}
