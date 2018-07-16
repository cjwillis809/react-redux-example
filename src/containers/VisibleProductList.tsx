import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { viewAllProducts } from '../actions/ProductActions';
import ProductCategoryView from '../components/ProductCategoryView/ProductCategoryView';
import {mockCatalog} from '../mock/MockProducts';
import ProductCategory from '../models/ProductCategory';
import { State } from "../reducers/";

export interface ProductCategoriesProps {
    productCategories: ProductCategory[],
    onViewBtnClick: (catId: number) => void
}

const getVisibleCategory = (filter: string) => {
    return filter === "All" ? mockCatalog : mockCatalog.filter(c => c.name === filter);
};

const mapStateToProps = (state: State) => ({
    productCategories: getVisibleCategory(state.categoryFilter.categoryFilter)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onViewBtnClick: (categoryId: number) => dispatch(viewAllProducts(categoryId))
});

export const VisibleProductList = connect(mapStateToProps, mapDispatchToProps)(ProductCategoryView) 