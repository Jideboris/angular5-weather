import { Forecast } from '../../../model/weather'
import * as fromActions from '../actions/weather'
import { ForecastState } from './app.states'

export const initialState: ForecastState = {
    forecasts: [],
    message: ''
}

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): ForecastState {
    alert('mowa')
    switch (action.type) {
        case fromActions.GET_FORECASTS_DONE: {
            return { forecasts: action.payload, message: 'Success' };
        }
        default: {
            return state
        }

    }
}