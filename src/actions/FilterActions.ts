export enum FilterActionTypes {
    SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
}

export interface SetCategoryFilterAction{ filterId: number, type: FilterActionTypes.SET_CATEGORY_FILTER }

export function setCategoryFilter(newFilter: number): SetCategoryFilterAction {
    return {
        filterId: newFilter,
        type: FilterActionTypes.SET_CATEGORY_FILTER
    }
}

export type Action = SetCategoryFilterAction