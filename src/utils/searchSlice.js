import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    showSearch: false,
    movieNames: null,
    movieResults: null,
  },
  reducers: {
    changeSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    addSearchMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { changeSearch, addSearchMovieResult } = searchSlice.actions;
export default searchSlice.reducer;
