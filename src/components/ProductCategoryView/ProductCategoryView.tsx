import * as React from 'react';
import { ProductCategoriesProps } from '../../containers/VisibleProductList';
import ProductList from '../ProductList/ProductList';

const ProductCategoryView = (props: ProductCategoriesProps) => {
    return (
        <div>
            {
                props.productCategories.map(pc => 
                    <ProductList
                        key={pc.id} 
                        productCategory={pc}
                        onViewBtnClick={props.onViewBtnClick}/>
                )
            }
        </div>
    );
}

export default ProductCategoryView;