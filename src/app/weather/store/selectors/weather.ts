import { createFeatureSelector, createSelector } from '@ngrx/store'
import { ForecastState } from '../../store/reducers/app.states'

export const getForecastState = createFeatureSelector<ForecastState>('forecastState')
export const getForecasts = createSelector(
    getForecastState,
    (state: ForecastState) => state.forecasts
);

export const getMessage = createSelector(
    getForecastState,
    (state: ForecastState) => state.message
);