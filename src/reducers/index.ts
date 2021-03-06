import { combineReducers } from 'redux';
import * as filterState from './FilterReducer';
import * as productViewState from './ProductViewReducer';

// Root state of application
export interface AppState {
    categoryFilter: filterState.FilterState,
    viewingAll: productViewState.ProductViewState
}

export const initialState: AppState = {
    categoryFilter: filterState.filterInitialState,
    viewingAll: productViewState.initialState
}

export const reducer = combineReducers<AppState>({
    categoryFilter: filterState.filterReducer,
    viewingAll: productViewState.reducer
})