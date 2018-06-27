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
                return { time: i, temp: item.main.temp, location: action.payload.city.name }
            })
            let final = []
            for (let a = 0; a <= output.length - 1; a++) {
                let d = output[a].time
                if (d === '06' || d === '12' || d === '18' || d === '00') {
                    final[0] = (output[a])
                }
                if (d === '12') {
                    final[1] = (output[a])
                }
                if (d === '18') {
                    final[2] = (output[a])
                }
                if (d === '00') {
                    final[3] = (output[a])
                }
            }
            return {
                ...state,
                forecasts: final, message: action.payload.city.name, loading: false
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

