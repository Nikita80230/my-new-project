import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartReducer } from "./cart/cartSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  //   whitelist: ["refreshToken", "sid"],
};

const persistedAuthReducer = persistReducer(cartPersistConfig, cartReducer); //

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
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
