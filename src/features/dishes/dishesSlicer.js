import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const initialState = [...data];

export const dishesSlicer = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    decrementAvailable: (state, action) => {
      state.find(item => item.id === action.payload).available--;
    },
    returnDishes: (state, action) => {
      const { id, amount } = action.payload;
      state.find(item => item.id === id).available += amount;
    },
  },
});

export const { decrementAvailable, returnDishes } = dishesSlicer.actions;

export const selectDishes = state => state.dishes;

export default dishesSlicer.reducer;
