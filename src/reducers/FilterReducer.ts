import { Action, FilterActionTypes } from './../actions/FilterActions';

export interface FilterState {
    categoryFilter: string
}

export const initialState: FilterState = {
    categoryFilter: 'All'
}

export function reducer(state: FilterState = initialState, action: Action) {
    switch(action.type) {
        case FilterActionTypes.SET_CATEGORY_FILTER:
            return Object.assign({}, state, {
                categoryFilter: action.filterName
            })
        default:
            return state
    }
}