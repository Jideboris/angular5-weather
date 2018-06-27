import { Component, OnChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import * as fromReducer from '../../store/reducers/weather'
import * as fromActions from '../../store/actions/weather'

import { Forecast } from '../../../model/weather'
import { State } from '../../store/reducers/weather'
import { getWeather, getMessage } from '../../store/selectors/weather'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  forecasts$: Observable<Forecast[]>
  message$: Observable<any>
  constructor(private store: Store<State>) {

    this.forecasts$ = store.select(getWeather)
    this.message$ = store.select(getMessage)

   console.log(store)

  }

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}


