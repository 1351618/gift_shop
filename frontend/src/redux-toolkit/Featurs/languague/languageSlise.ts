"use client";

import { createSlice } from "@reduxjs/toolkit";

// тип
export interface LanguagueState {
  value: string;
}

// значение по умолчанию
const initialState: LanguagueState = {
  value: "ru",
};

export const languagueSlice = createSlice({
  name: "languague",
  initialState,
  reducers: {
    languageSelect: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { languageSelect } = languagueSlice.actions;
export default languagueSlice.reducer;
