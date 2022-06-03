import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from './asyncAction';

const initialState = {
  movies: [],
  isLoading: false,
  errorMessage: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: {
    // Get movies
    [getMovies.pending]: state => {
      state.errorMessage = '';
      state.isLoading = true;
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.movies = payload;
      state.isLoading = false;
    },
    [getMovies.rejected]: (state, { error: { message } }) => {
      state.errorMessage = message;
      state.isLoading = false;
    },
  },
});

export default moviesSlice.reducer;
