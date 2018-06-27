
import { Action } from '@ngrx/store'
import { Forecast } from '../../../model/weather'

export const GET_FORECASTS = "GET_FORECASTS"
export const GET_FORECASTS_DONE = "GET_FORECASTS_DONE"
export const GET_FORECASTS_FAILED = 'GET_FORECASTS_FAILED'

export class GetforecastsAction implements Action {
  readonly type = GET_FORECASTS
  constructor(public payload: string) { }
}
export class GetForcastsDoneAction implements Action {
  readonly type = GET_FORECASTS_DONE
  constructor(public payload: any) { }
}
export class GetForcastsFailedAction implements Action {
  readonly type = GET_FORECASTS_FAILED
  constructor(public payload: any) { }
}
export type ALL_REDUCER_ACTIONS
  = GetforecastsAction
  | GetForcastsDoneAction
  | GetForcastsFailedAction