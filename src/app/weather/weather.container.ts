import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import * as fromReducer from '../weather/store/selectors/weather'
import * as fromActions from '../weather/store/actions/weather'
import { Forecast } from '../model/weather'
import { State } from './store/reducers/weather'



@Component({
  selector: 'app-weather',
  template: `
  <app-search></app-search>
  <app-results></app-results>  `
})
export class WeatherContainer implements OnInit {

  message$: Observable<string>
  forecasts$: Observable<Forecast[]>

  constructor(private store: Store<State>) {

  }

  ngOnInit(): void {

  }
  citySearch(city: string) {
   
  }
}
