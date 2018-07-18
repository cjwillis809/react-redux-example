import { FilterActionTypes } from "../src/actions/FilterActions";
import { filterReducer } from "../src/reducers/FilterReducer";

describe('reducers', () => {
    it('FilterReducer - initialState', () => {
        expect(filterReducer(undefined, {type: FilterActionTypes.EMPTY_ACTION})).toEqual({
            categoryFilter: -1
        })
    });
})