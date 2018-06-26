import { Component, OnChanges } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import * as fromReducer from '../../store/reducers/weather'
import * as fromActions from '../../store/actions/weather'

import { Forecast } from '../../../model/weather'
import { ForecastState } from '../../store/reducers/app.states'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {
  constructor() { }

  ngOnChanges() {
    // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
  }
}


