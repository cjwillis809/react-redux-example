import { combineReducers } from 'redux';
import * as filterState from './FilterReducer';

// Root state of application
export interface State {
    categoryFilter: filterState.FilterState
}

export const initialState: State = {
    categoryFilter: filterState.initialState,
}

export const reducer = combineReducers<State>({
    categoryFilter: filterState.reducer
})