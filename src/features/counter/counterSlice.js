import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    
    remove: (state, action) => {
      return state.filter(item => item.id !== action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const {add, remove } = counterSlice.actions

export default counterSlice.reducer