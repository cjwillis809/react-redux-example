import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setCategoryFilter } from '../actions/FilterActions';
import { viewAllProducts } from '../actions/ProductActions';
import ProductCategoryView from '../components/ProductCategoryView/ProductCategoryView';
import {mockCatalog} from '../mock/MockProducts';
import ProductCategory from '../models/ProductCategory';
import { State } from "../reducers/";

export interface ProductCategoriesProps {
    productCategories: ProductCategory[],
    onViewBtnClick: (catId: number) => void
}

const getVisibleCategory = (categoryId: number) => {
    return categoryId === -1 ? mockCatalog : mockCatalog.filter(c => c.id === categoryId);
};

const mapStateToProps = (state: State) => ({
    productCategories: getVisibleCategory(state.categoryFilter.categoryFilter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onViewBtnClick: (categoryId: number) => {
        dispatch(viewAllProducts(categoryId, true))
        dispatch(setCategoryFilter(categoryId))
    }
});

export const VisibleProductList = connect(mapStateToProps, mapDispatchToProps)(ProductCategoryView) 