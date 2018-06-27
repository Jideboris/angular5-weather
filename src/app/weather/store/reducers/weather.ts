import { Forecast } from '../../../model/weather'
import * as fromActions from '../actions/weather'

export interface AppState {
    weatherState: State;
};

export interface State {
    forecasts: any
    message: string
    loading: boolean
};

export const initialState: State = {
    forecasts: [],
    message: '',
    loading: false
}

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): State {
    console.log(action.type)
    switch (action.type) {
        case fromActions.GET_FORECASTS: {
            return {
                forecasts: [], message: '', loading: true
            };
        }
        case fromActions.GET_FORECASTS_DONE: {
            let output = action.payload.list.map((item) => {
                return { time: item.dt_txt, temp: item.main.temp }
            })
            return {
                forecasts: output, message: 'Success', loading: false
            }
        }
        case fromActions.GET_FORECASTS_FAILED: {
            return {
                forecasts: [], message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

