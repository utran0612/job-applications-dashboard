import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  userId: "655bc8b20f86a43c9c4f5725",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
