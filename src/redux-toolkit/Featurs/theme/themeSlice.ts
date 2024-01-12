"use client";

import { createSlice } from "@reduxjs/toolkit";

// тип
export interface ThemeState {
  value: boolean;
}

// значение по умолчанию
const initialState: ThemeState = {
  value: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { themeSelect } = themeSlice.actions;
export default themeSlice.reducer;
