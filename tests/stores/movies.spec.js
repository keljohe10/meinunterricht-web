import { getMovies } from '@/stores/movies/asyncAction';

import reducer from '@/stores/movies/movies';

describe('moviesSlice', () => {
  const movies = [
    {
      title: 'Race to Space',
      director: 'Sean McNamara',
      plot: 'In the 1960s a young woman works at NASA as an animal trainer responsible for the chimpanzee who will go into space.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNDUwMDA1NV5BMl5BanBnXkFtZTcwNTA5MTAwMQ@@._V1_SX300.jpg',
      imbdID: 'tt0167360',
    },
  ];

  const initialState = {
    movies: [],
    isLoading: false,
    errorMessage: '',
  };

  describe('when getting movies', () => {
    test('sets isLoading true when getMovies is pending', () => {
      const action = { type: getMovies.pending.type };
      const state = reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        isLoading: true,
      });
    });

    test('sets the outlines when getMovies is fulfilled', () => {
      const action = {
        type: getMovies.fulfilled.type,
        payload: movies,
      };
      const state = reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        movies,
      });
    });

    test('sets isLoading false when getMovies is rejected', () => {
      const action = {
        type: getMovies.rejected.type,
        error: { message: 'some error' },
      };
      const state = reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        isLoading: false,
        errorMessage: 'some error',
      });
    });
  });
});
