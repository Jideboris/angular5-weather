import { Store } from '@ngrx/store'
import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as fromReducer from '../../store/reducers/weather'
import * as fromActions from '../../store/actions/weather'

import { Forecast } from '../../../model/weather'
import { State } from '../../store/reducers/weather'
import { getWeather, getMessage } from '../../store/selectors/weather'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  forecasts$: Observable<Forecast[]>
  message$: Observable<any>
  constructor(private store: Store<State>) {

    this.forecasts$ = store.select(getWeather)
    this.message$ = store.select(getMessage)
    console.log(store)
  }

  searchforecast(city: string) {
    this.getforecastsbycity(city)
  }
  getforecastsbycity(city) {
    this.store.dispatch(new fromActions.GetforecastsAction(city))
  }
}
