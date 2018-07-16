import { Action, ProductActionTypes } from './../actions/ProductActions';

export interface ProductViewState {
    viewingAll?: number
}

export const initialState: ProductViewState = {
    viewingAll: undefined
}

export function reducer(state: ProductViewState = initialState, action: Action) {
    switch(action.type) {
        case ProductActionTypes.VIEW_ALL_PRODUCTS:
            return Object.assign({}, state, {
                viewingAll: action.categoryId
            })
        default:
            return state;
    }
}