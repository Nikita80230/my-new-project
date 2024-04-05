import { createSlice } from '@reduxjs/toolkit'; //, PayloadAction

type InitialAuthState = {};

const initialAuthState: InitialAuthState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialAuthState,
  reducers: {},
  // extraReducers: builder => {},
});

export const cartReducer = cartSlice.reducer;
