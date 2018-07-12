import {createStore} from 'redux';
import {reducer} from '../reducers';
/**
 * Our Redux Store
 */

const store = createStore(reducer)

export default store;