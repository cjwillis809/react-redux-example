import { combineReducers } from 'redux';
import * as filterState from './FilterReducer';
import * as productState from './ProductViewReducer';

// Root state of application
export interface State {
    categoryFilter: filterState.FilterState,
    viewingAll: productState.ProductViewState
}

export const initialState: State = {
    categoryFilter: filterState.initialState,
    viewingAll: productState.initialState
}

export const reducer = combineReducers<State>({
    categoryFilter: filterState.reducer,
    viewingAll: productState.reducer
})