import { Component, OnInit } from '@angular/core';

import { Horse } from 'src/app/horse.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as horseActions from '../../horse.actions';

@Component({
  selector: 'app-user-interaction',
  templateUrl: './user-interaction.component.html',
  styleUrls: ['./user-interaction.component.scss']
})
export class UserInteractionComponent implements OnInit {

  horses$: Observable<Horse[]> = this.store.select(
    (state: fromRoot.State) => state.allHorses.horses
  );
  

  //horse: any;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit(): void {
    this.store.dispatch(horseActions.getHorses());    
  }

  like(horse: Horse) {
    this.store.dispatch(horseActions.likeHorse({ horse }));
  }

  favourite(horse: Horse) {
    this.store.dispatch(horseActions.favouriteHorse({ horse }));
  }

  dislike(horse: Horse) {
    this.store.dispatch(horseActions.dislikeHorse({ horse }));
  }
    // this.horseService.getData().subscribe(x => {
    //   console.log('express api', x)
    // })

}
