import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import savedReducer from './reducers/savedReducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    saved: savedReducer
  },
});
export default store;
