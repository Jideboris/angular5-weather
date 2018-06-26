import { Forecast } from '../../../model/weather'
import * as fromActions from '../actions/weather'
import { ForecastState } from './app.states'

export const initialState: ForecastState = {
    forecasts: [],
    message: '',
    loading: false
}

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ForecastState {
    alert('mowa')
    switch (action.type) {
        case fromActions.GET_FORECASTS_DONE: {
            return { ...state, forecasts: action.payload, message: 'Success',loading:true }
        }
        default: {
            return state
        }

    }
}