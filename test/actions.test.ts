import { FilterActionTypes, setCategoryFilter } from "../src/actions/FilterActions";

describe('actions', () => {
    it('should create an action to set the category filter', () => {
        const filterId = 7;
        const expectedAction = {
            filterId: filterId,
            type: FilterActionTypes.SET_CATEGORY_FILTER
        }
        expect(setCategoryFilter(filterId)).toEqual(expectedAction)
    });
})
