import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
  },
  reducers: {
    changeSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
  },
});

export const { changeSearch } = searchSlice.actions;
export default searchSlice.reducer;
