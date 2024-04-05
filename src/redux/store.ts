import { configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { cartReducer } from './cart/cartSlice';
import { pharmacyReducer } from './pharmacy/pharmacySlice';

const cartPersistConfig = {
  key: 'cart',
  storage,
  //   whitelist: ["refreshToken", "sid"],
};

const pharmacyPersistConfig = {
  key: 'pharmacy',
  storage,
  //   whitelist: ["refreshToken", "sid"],
};

const persistedAuthReducer = persistReducer(cartPersistConfig, cartReducer); //
const persistedPharmacyReducer = persistReducer(pharmacyPersistConfig, pharmacyReducer); //

const store = configureStore({
  reducer: {
    cart: persistedAuthReducer,
    pharmacy: persistedPharmacyReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        // @ts-ignore
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
