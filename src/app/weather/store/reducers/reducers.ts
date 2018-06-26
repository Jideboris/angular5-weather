import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store'
import { AppState } from './app.states'
import * as forecastReducer from './weather'
import { environment } from '../../../../environments/environment'
import * as fromActions from '../actions/weather'

export const reducers: ActionReducerMap<AppState> = {
    forecastState: forecastReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: fromActions.ALL_REDUCER_ACTIONS): AppState {
    //    console.log('state', state)
    //   console.log('action', action)
        return reducer(state, action)
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : []; 