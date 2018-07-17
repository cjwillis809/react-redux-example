import { Dispatch } from 'redux';
import ProductCategory from "../models/ProductCategory";
import { ProductsLoadingAction } from './ProductActions';

export enum ProductActionTypes {
    VIEW_ALL_PRODUCTS = 'VIEW_ALL_PRODUCTS',
    PRODUCTS_HAVE_ERRORED = 'PRODUCTS_HAVE_ERRORED',
    PRODUCTS_ARE_LOADING = 'PRODUCTS_ARE_LOADING',
    PRODUCTS_FETCH_SUCCESS = 'PRODUCTS_FETCH_SUCCESS'
}

export interface ViewAllProductsAction{ 
    categoryId: number, 
    shouldShowAll: boolean, 
    type: ProductActionTypes.VIEW_ALL_PRODUCTS 
}

export interface ProductsErrorAction {
    hasErrored: boolean,
    type: ProductActionTypes.PRODUCTS_HAVE_ERRORED
}

export interface ProductsLoadingAction {
    isLoading: boolean,
    type: ProductActionTypes.PRODUCTS_ARE_LOADING
}

export interface ProductsSuccessAction {
    productCategories: ProductCategory[],
    type: ProductActionTypes.PRODUCTS_FETCH_SUCCESS
}

export function productsHaveErrored(errored: boolean): ProductsErrorAction {
    return {
        hasErrored: errored,
        type: ProductActionTypes.PRODUCTS_HAVE_ERRORED
    }
}

export function productsAreLoading(loading: boolean): ProductsLoadingAction {
    return {
        isLoading: loading,
        type: ProductActionTypes.PRODUCTS_ARE_LOADING
    }
}

export function productsFetchSuccess(categories: ProductCategory[]): ProductsSuccessAction {
    return {
        productCategories: categories,
        type: ProductActionTypes.PRODUCTS_FETCH_SUCCESS
    }
}

/**
 * Thunk function
 */
export function productsFetchData(url: string) {
    return (dispatch: Dispatch) => {
        dispatch(productsAreLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(productsAreLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(productsFetchSuccess(items)))
            .catch(() => dispatch(productsHaveErrored(true)));
    }
}

export function viewAllProducts(categoryId: number, show: boolean): ViewAllProductsAction {
    return {
        'categoryId': categoryId,
        shouldShowAll: show,
        type: ProductActionTypes.VIEW_ALL_PRODUCTS
    }
}

export type Action = ViewAllProductsAction | ProductsLoadingAction | ProductsErrorAction | ProductsSuccessAction