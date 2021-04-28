import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlicer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const result = state.find(item => item.id === action.payload.id);

      if (!result) {
        const { id, img, description, price } = action.payload;
        state.push({
          id,
          img,
          description,
          price,
          amount: 1,
          total: price,
          note: '',
        });
      } else {
        result.amount++;
        result.total = result.amount * result.price;
      }
    },
    removeDish: (state, action) => {
      state.splice(
        state.findIndex(item => item.id === action.payload),
        1
      );
    },
    addNote: (state, action) => {
      const { id, note } = action.payload;
      state.find(item => item.id === id).note = note;
    },
    clearCart: state => (state = initialState),
  },
});

export const { addDish, removeDish, addNote, clearCart } = cartSlicer.actions;

export const selectCart = state => state.cart;

export default cartSlicer.reducer;
