import * as React from 'react';
import ProductCategory from '../../models/ProductCategory';
import ProductTile from '../ProductTile/ProductTile';
import './ProductList.css';

interface ProductListProps {
    productCategory: ProductCategory,
    onViewBtnClick: (catId: number) => void
}

const ProductList = (props: ProductListProps) => {
    const handleClick = () => props.onViewBtnClick(props.productCategory.id);
    
    return (
        <div className="list-view">
            <div className="list-header">
                <p className="list-header-title">{props.productCategory.name}</p>
                <button className="list-view-all-btn" onClick={handleClick}>VIEW ALL</button>
            </div>
            <div className="list-content">
            {
                props.productCategory.products.map(pr => 
                    <ProductTile 
                        key={pr.id} 
                        product={pr} />
                )
            }
            </div>
        </div>
    );
}

export default ProductList;