import { Component, OnChanges, OnInit } from '@angular/core'
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
export class ResultsComponent implements OnInit {
  ngOnInit() {

  }
  forecasts$: Observable<Forecast[]>
  message$: string
  location$: string
  constructor(private store: Store<State>) {
    this.forecasts$ = this.store.select(getWeather)
    this.store.select(getMessage).subscribe(res => {
      this.message$ = res
    })
  }

  ngOnChanges() {

  }
}


