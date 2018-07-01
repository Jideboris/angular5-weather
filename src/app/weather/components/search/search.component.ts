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

export class SearchComponent implements OnInit {
  forecasts$: Observable<Forecast[]>
  message$: Observable<any>
  @Input()
  city ='London'
  constructor(private store: Store<State>) {
    this.forecasts$ = this.store.select(getWeather)

  }
  ngOnInit() {

  }
  searchforecast(city: string) {
    alert(this.city)
    this.getforecastsbycity(city)
  }
  getforecastsbycity(city) {
    this.store.dispatch(new fromActions.GetforecastsAction(city))
  }
}
