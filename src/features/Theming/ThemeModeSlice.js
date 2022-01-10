import { createSlice } from "@reduxjs/toolkit";
export const themeModeSlice = createSlice({
  name: "themeMode",
  //this is the initial state
  initialState: {
    value: "dark",
  },
  //reducers: these are the functions for updating the state of dark mode / light mode
  reducers: {
    lightMode: (state) => {
      state.value = "light";
    },
    darkMode: (state) => {
      state.value = "dark";
    },
  },
});

export const { lightMode, darkMode } = themeModeSlice.actions;
export default themeModeSlice.reducer;
