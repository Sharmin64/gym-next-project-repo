"use client";
import { configureStore } from "@reduxjs/toolkit";
import { teamApi } from "./api/teamApi"; // Import your API slice
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [teamApi.reducerPath]: teamApi.reducer, // Add your API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(teamApi.middleware),
});

// Required for RTK Query caching & refetching on focus
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
