import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMovies } from '@/api/movies';

export const getMovies = createAsyncThunk('movies/getMovies', async text => {
  const response = await fetchMovies(text);

  return response.data.movies;
});
