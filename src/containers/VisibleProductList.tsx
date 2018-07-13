import { connect } from 'react-redux';
import ProductCategoryView from '../components/ProductCategoryView/ProductCategoryView';
import {mockCatalog} from '../mock/MockProducts';
import ProductCategory from '../models/ProductCategory';
import { State } from "../reducers/";

export interface ProductCategoriesProps {
    productCategories: ProductCategory[]
}

const getVisibleCategory = (filter: string) => {
    return filter === "All" ? mockCatalog : mockCatalog.filter(c => c.name === filter);
}

const mapStateToProps = (state: State) => ({
    productCategories: getVisibleCategory(state.categoryFilter.categoryFilter)
})

export const VisibleProductList = connect(mapStateToProps)(ProductCategoryView) 