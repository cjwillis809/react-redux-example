export enum ProductActionTypes {
    VIEW_ALL_PRODUCTS = 'VIEW_ALL_PRODUCTS'
}

export interface ViewAllProductsAction{ categoryId: number, shouldShowAll: boolean, type: ProductActionTypes.VIEW_ALL_PRODUCTS }

export function viewAllProducts(categoryId: number, show: boolean): ViewAllProductsAction {
    return {
        'categoryId': categoryId,
        shouldShowAll: show,
        type: ProductActionTypes.VIEW_ALL_PRODUCTS
    }
}

export type Action = ViewAllProductsAction