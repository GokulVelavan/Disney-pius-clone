import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommanded: null,
  newDidney: null,
  originals: null,
  trending: null,
};

const MovieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommanded = action.payload.recommanded;
      state.newDidney = action.payload.newDidney;
      state.originals = action.payload.originals;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = MovieSlice.actions;
export const setRecommanded = (state) => state.movie.recommanded;
export const setNewDisney = (state) => state.movie.newDidney;
export const setOriginals = (state) => state.movie.originals;
export const setTrending = (state) => state.movie.trending;
export default MovieSlice.reducer;
