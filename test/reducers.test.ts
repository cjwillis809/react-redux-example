import { FilterActionTypes } from "../src/actions/FilterActions";
import { filterReducer } from "../src/reducers/FilterReducer";

describe('reducers', () => {
    it('FilterReducer - initialState', () => {
        expect(filterReducer(undefined, {type: FilterActionTypes.EMPTY_ACTION})).toEqual({
            categoryFilter: -1
        })
    });

    it('FilterReducer - should handle SET_CATEGORY_FILTER', () => {
        const expectedState = {
            categoryFilter: 1
        }
        const expectedState2 = {
            categoryFilter: 2
        }

        expect(filterReducer(undefined, {
            filterId: 1,
            type: FilterActionTypes.SET_CATEGORY_FILTER
        })).toEqual(expectedState)

        expect(filterReducer(expectedState, {
            filterId: 2,
            type: FilterActionTypes.SET_CATEGORY_FILTER
        })).toEqual(expectedState2)
    });
})