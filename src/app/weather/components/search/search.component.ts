import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as fromReducer from '../../store/reducers/weather'
import * as fromActions from '../../store/actions/weather'

import { Forecast } from '../../../model/weather'
import { ForecastState } from '../../store/reducers/app.states'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  constructor(private store: Store<ForecastState>) { }
  ngOnInit() {
    // this.store.dispatch(new userActions.LoadAction());
  }
  search(city: string) {
    this.getforecastsbycity(city)
  }
  getforecastsbycity(city) {
    this.store.dispatch(new fromActions.Getforecasts(city))
  }
}
