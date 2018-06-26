import { Forecast } from '../../../model/weather'

export interface AppState {
    forecastState: ForecastState
}

export interface ForecastState {
    forecasts: Forecast[]
    message: string

} 