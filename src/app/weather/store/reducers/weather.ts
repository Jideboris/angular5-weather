import { Forecast } from '../../../model/weather'
import * as fromActions from '../actions/weather'
import { ForecastState } from './app.states'

export const initialState: ForecastState = {
    forecasts: [],
    message: '',
    loading: false
}

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ForecastState {
    console.log(action.type)
    switch (action.type) {
        case fromActions.GET_FORECASTS: {
            console.log(action.payload)
            return {
                ...state,
                loading: true
            };
        }
        case fromActions.GET_FORECASTS_DONE: {
            console.log(action.payload)
            return {
                ...state,
                forecasts: action.payload, message: 'Success', loading: false
            }
        }
        default: {
            return state
        }

    }
}