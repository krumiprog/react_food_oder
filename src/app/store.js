import { configureStore } from '@reduxjs/toolkit';
import dishesReducer from '../features/dishes/dishesSlicer';
import cartReducer from '../features/cart/cartSlicer';

export const store = configureStore({
  reducer: {
    dishes: dishesReducer,
    cart: cartReducer,
  },
});
