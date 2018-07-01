import { Store } from '@ngrx/store'
import { Component, OnInit, Input } from '@angular/core'
import { FormControl } from '@angular/forms'
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
  selectedcity: FormControl
  langs: string[] = [
    'London',
    'USA',
    'Farborough',
  ]

  @Input()
  city = 'London'
  lang = ''

  constructor(private store: Store<State>) {
    this.forecasts$ = this.store.select(getWeather)

  }
  ngOnInit() {
    this.selectedcity = new FormControl()

  }
  ChangeValue(event: Event): void {
    console.log(event)
    const value: string = (<HTMLSelectElement>event.srcElement).value
    console.log(value)
  }

  searchforecast(city: string) {
    // this.getforecastsbycity(city)
  }
  getforecastsbycity(city) {
    this.store.dispatch(new fromActions.GetforecastsAction(city))
  }
}
