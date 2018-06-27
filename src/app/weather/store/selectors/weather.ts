import { createFeatureSelector, createSelector } from '@ngrx/store'
import { State } from '../../store/reducers/weather'

export const getWeatherState = createFeatureSelector<State>('weatherState')
export const getWeather = createSelector(
    getWeatherState,
    (state: State) => state.forecasts
);

export const getMessage = createSelector(
    getWeatherState,
    (state: State) => state.message
);

export const getLoading = createSelector(
    getWeatherState,
    (state: State) => state.loading
);