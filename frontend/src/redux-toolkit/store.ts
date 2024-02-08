//src\redux-toolkit\store.tsx
"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Featurs/counter/counterSlise";
import languagueReducer from "./Featurs/languague/languageSlise";
import themeReducer from "./Featurs/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    languague: languagueReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
