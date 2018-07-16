export enum ProductActionTypes {
    VIEW_ALL_PRODUCTS = 'VIEW_ALL_PRODUCTS'
}

export interface ViewAllProductsAction{ categoryId: number, type: ProductActionTypes.VIEW_ALL_PRODUCTS }

export function viewAllProducts(categoryId: number): ViewAllProductsAction {
    return {
        'categoryId': categoryId,
        type: ProductActionTypes.VIEW_ALL_PRODUCTS
    }
}

export type Action = ViewAllProductsAction