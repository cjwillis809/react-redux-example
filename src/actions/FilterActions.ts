export enum FilterActionTypes {
    SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER'
}

export interface SetCategoryFilterAction{ filterName: string, type: FilterActionTypes.SET_CATEGORY_FILTER }

export function setCategoryFilter(newFilter: string): SetCategoryFilterAction {
    return {
        filterName: newFilter,
        type: FilterActionTypes.SET_CATEGORY_FILTER
    }
}

export type Action = SetCategoryFilterAction