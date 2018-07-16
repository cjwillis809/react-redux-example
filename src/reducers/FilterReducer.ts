import { Action, FilterActionTypes } from './../actions/FilterActions';

export interface FilterState {
    categoryFilter: number
}

export const initialState: FilterState = {
    categoryFilter: -1
}

export function reducer(state: FilterState = initialState, action: Action) {
    switch(action.type) {
        case FilterActionTypes.SET_CATEGORY_FILTER:
            return Object.assign({}, state, {
                categoryFilter: action.filterId
            })
        default:
            return state
    }
}