import ProductCategory from '../models/ProductCategory';
import { Action, ProductActionTypes } from './../actions/ProductActions';

export interface ProductCategoriesState {
    productCategories: ProductCategory[],
    productsError: boolean,
    productsLoading: boolean
}

export const initialState: ProductCategoriesState = {
    productCategories: [],
    productsError: false,
    productsLoading: false
}

export function reducer(state: ProductCategoriesState = initialState, action: Action) {
    switch(action.type) {
        case ProductActionTypes.PRODUCTS_HAVE_ERRORED:
            return Object.assign({}, state, {
                ...state,
                productsError: action.hasErrored
            })
        case ProductActionTypes.PRODUCTS_ARE_LOADING:
            return Object.assign({}, state, {
                ...state,
                productsLoading: action.isLoading
            })
        case ProductActionTypes.PRODUCTS_FETCH_SUCCESS:
            return Object.assign({}, state, {
                ...state,
                productCategories: action.productCategories
            })
        default:
            return state;
    }
}