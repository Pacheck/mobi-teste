import { configureStore } from "@reduxjs/toolkit";
import carListsReducer from '@/redux/features/car-list-slice';

export const store = configureStore({
  reducer: {
    carListsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
