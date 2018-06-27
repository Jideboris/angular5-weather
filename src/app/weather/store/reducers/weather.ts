import { Forecast } from '../../../model/weather'
import * as fromActions from '../actions/weather'

export interface AppState {
    weatherState: State
};

export interface State {
    forecasts: any
    message: string
    loading: boolean
};

export const initialState: State = {
    forecasts: {},
    message: '',
    loading: false
}

export function reducer(state = initialState, action: fromActions.ALL_REDUCER_ACTIONS): State {
    console.log(action.type)
    switch (action.type) {
        case fromActions.GET_FORECASTS: {
            return {
                ...state,
                forecasts: {}, message: '', loading: true
            };
        }
        case fromActions.GET_FORECASTS_DONE: {
            let tobereturned = {}
            let output = action.payload.list.map((item) => {
                let i = item.dt_txt.split(' ')[1].split(':')[0]
                let inclu = (i == '09' || i == '15' || i == '21' || i == '03')
                if (!inclu) {
                    return { time: item.dt_txt.split(' ')[1].split(':')[0], temp: item.main.temp, visible: true }
                }
                return { time: item.dt_txt.split(' ')[1].split(':')[0], temp: item.main.temp, visible: false }
            })
            console.log(output)
            return {
                ...state,
                forecasts: output, message: 'Success', loading: false
            }
        }
        case fromActions.GET_FORECASTS_FAILED: {
            return {
                ...state,
                forecasts: {}, message: action.payload, loading: false
            }
        }
        default: {
            return state
        }

    }
}

