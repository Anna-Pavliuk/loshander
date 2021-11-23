import { Component, OnInit } from '@angular/core';

import { Horse } from 'src/app/horse.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as horseActions from '../../horse.actions';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  matches$: Observable<Horse[]> = this.store.select(
    (state: fromRoot.State) => state.allHorses.likes
  );

  favourites$: Observable<Horse[]> = this.store.select(
    (state: fromRoot.State) => state.allHorses.favourites
  );

  dislikes$: Observable<Horse[]> = this.store.select(
    (state: fromRoot.State) => state.allHorses.dislikes
  );

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit(): void {
  }

}
