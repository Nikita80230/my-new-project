import { CartPill, Pill } from '@/types/Pill';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'; //, PayloadAction
import { RootState } from '../store';

type InitialAuthState = {
  cartItems: CartPill[];
};

const initialAuthState: InitialAuthState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialAuthState,
  reducers: {
    addToCart(state, action: PayloadAction<Pill>) {
      const isPillInCart = state.cartItems.some(item => item.id === action.payload.id);
      if (isPillInCart) {
        state.cartItems = state.cartItems.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        const formattedPill: CartPill = { ...action.payload, quantity: 1 };
        state.cartItems.push(formattedPill);
      }
    },
    removeItem(state, action: PayloadAction<Pill>) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
  },
  // extraReducers: builder => {},
});

export const { addToCart, removeItem } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const cartReducer = cartSlice.reducer;
