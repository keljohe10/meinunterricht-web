import Client from '@/lib/axios';

const axios = Client();

export const fetchMovies = text =>
  axios.get('/movies', { params: { s: text } });
