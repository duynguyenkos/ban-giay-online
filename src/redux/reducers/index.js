import { combineReducers } from 'redux';
import cart from '../reducers/Cart';
import product from '../reducers/Product';

const rootReducer = combineReducers({
    cart,product
})

export default rootReducer;