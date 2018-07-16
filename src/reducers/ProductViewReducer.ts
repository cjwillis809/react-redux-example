import { Action, ProductActionTypes } from './../actions/ProductActions';

export interface ProductViewState {
    viewingAll: boolean
}

export const initialState: ProductViewState = {
    viewingAll: false
}

export function reducer(state: ProductViewState = initialState, action: Action) {
    switch(action.type) {
        case ProductActionTypes.VIEW_ALL_PRODUCTS:
            return Object.assign({}, state, {
                viewingAll: action.shouldShowAll
            })
        default:
            return state;
    }
}