import { combineReducers } from 'redux';
import * as filterState from './FilterReducer';
import * as productState from './ProductsReducer';
import * as productViewState from './ProductViewReducer';

// Root state of application
export interface AppState {
    categoryFilter: filterState.FilterState,
    products: productState.ProductCategoriesState,
    viewingAll: productViewState.ProductViewState
}

export const initialState: AppState = {
    categoryFilter: filterState.initialState,
    products: productState.initialState,
    viewingAll: productViewState.initialState
}

export const reducer = combineReducers<AppState>({
    categoryFilter: filterState.reducer,
    products: productState.reducer,
    viewingAll: productViewState.reducer
})