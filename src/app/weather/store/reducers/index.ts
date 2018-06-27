
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment'

import * as fromReducer from './weather'
import { AppState } from './weather'


export const reducers: ActionReducerMap<AppState> = {
    weatherState: fromReducer.reducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action)
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : []; 