import { Injectable } from '@angular/core'
import { Effect, Actions } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import * as ForecastActions from '../actions/weather'
import { WeatherService } from '../../weather.service'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import { of } from 'rxjs/observable/of'

@Injectable()

export class ForecastEffects {

    constructor(private actions$: Actions,
        private weatherService: WeatherService) { }
    @Effect()
    searchWeatherForCity$: Observable<Action> = this.actions$
        .ofType<ForecastActions.Getforecasts>(ForecastActions.GET_FORECASTS)
        .map(a => a.payload)
        .switchMap(city => {
            return this.weatherService.searchWeatherForCity(city)
                .map(res => new ForecastActions.GetForcastsDone(res))
                .catch(error => of(new ForecastActions.GetForcastsFailed(error)))
        });
}