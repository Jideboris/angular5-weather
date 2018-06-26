import { Injectable } from '@angular/core'
import { Action, Store } from '@ngrx/store'

import { Forecast } from '../../../model/weather'

export const GET_FORECASTS = "GET_FORECASTS"
export const GET_FORECASTS_DONE = "GET_FORECASTS_DONE"
export const GET_FORECASTS_FAILED = 'GET_FORECASTS_FAILED'

export class Getforecasts implements Action {
  readonly type = GET_FORECASTS
  constructor(public payload: string) { }
}
export class GetForcastsDone implements Action {
  readonly type = GET_FORECASTS_DONE
  constructor(public payload: Forecast[]) { }
}
export class GetForcastsFailed implements Action {
  readonly type = GET_FORECASTS_FAILED
  constructor(public payload: any) { }
}
export type ALL_REDUCER_ACTIONS = Getforecasts | GetForcastsDone | GetForcastsFailed