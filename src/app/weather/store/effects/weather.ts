import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import * as fromActions from '../actions/weather'
import { WeatherService } from '../../weather.service'

import {Forecast} from '../../../model/weather'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/mergeMap'
import { of } from 'rxjs/observable/of';

@Injectable()
export class ForecastEffects {
    constructor(private actions$: Actions,
        private weatherService: WeatherService) {
        
        // this.weatherService.getForecast('London').subscribe(res=>{
        //     console.log(res)
        // })
    }

    @Effect()
    searchforecast$: Observable<Action> = this.actions$
        .ofType<fromActions.GetforecastsAction>(fromActions.GET_FORECASTS)
        .map(action => action.payload)
        .switchMap(id =>
            this.weatherService.getForecast(id)
                .map(res => new fromActions.GetForcastsDoneAction(res))
                .catch(error => of(new fromActions.GetForcastsFailedAction(error)))
        );


}
