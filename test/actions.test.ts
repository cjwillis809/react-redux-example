import { FilterActionTypes, setCategoryFilter } from "../src/actions/FilterActions";
import { ProductActionTypes, viewAllProducts } from './../src/actions/ProductActions';

describe('actions', () => {
    it('should create an action to set the category filter', () => {
        const filterId = 7;
        const expectedAction = {
            filterId: filterId,
            type: FilterActionTypes.SET_CATEGORY_FILTER
        }
        expect(setCategoryFilter(filterId)).toEqual(expectedAction)
    });
    it('should create an action to show all products', () => {
        const catId = 3;
        const expectedAction = {
            'categoryId': catId,
            shouldShowAll: true,
            type: ProductActionTypes.VIEW_ALL_PRODUCTS
        }
        
        expect(viewAllProducts(catId, true)).toEqual(expectedAction)
    });
})
