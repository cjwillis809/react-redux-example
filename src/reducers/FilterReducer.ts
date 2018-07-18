import { Action, FilterActionTypes } from './../actions/FilterActions';

export interface FilterState {
    categoryFilter: number
}

export const filterInitialState: FilterState = {
    categoryFilter: -1
}

export function filterReducer(state: FilterState = filterInitialState, action: Action) {
    switch(action.type) {
        case FilterActionTypes.SET_CATEGORY_FILTER:
            return Object.assign({}, state, {
                categoryFilter: action.filterId
            })
        default:
            return state
    }
}