/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@/tests/testUtils';

import ContainerMovies from '@/containers/Movies/ContainerMovies';

beforeEach(cleanup);

describe('ContainerMovies', () => {
  let wrapper;
  const movies = [
    {
      title: 'Race to Space',
      director: 'Sean McNamara',
      plot: 'In the 1960s a young woman works at NASA as an animal trainer responsible for the chimpanzee who will go into space.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTczNDUwMDA1NV5BMl5BanBnXkFtZTcwNTA5MTAwMQ@@._V1_SX300.jpg',
      imbdID: 'tt0167360',
    },
    {
      title: 'Gore from Outer Space',
      director: 'Hirohisa Sasaki',
      plot: 'A woman is sent to execution for the murder of her daughter, who she believes is kidnapped. When she tells her story to a nun, we learn her story through a series of encounters with a psychic, a dirty politician, and two FBI agents who love Jell-O and believe there are aliens are responsible for bewildering the woman.',
      poster:
        'https://m.media-amazon.com/images/M/MV5BNTk2Nzg3NDEtMjQ4NC00Nzk4LWE0YmYtZTdmODYzYjIxOTljXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg',
      imbdID: 'tt0321649',
    },
  ];

  const initialState = {
    movies: {
      movies,
    },
  };

  describe('snapshot', () => {
    beforeEach(() => {
      wrapper = render(<ContainerMovies />, { initialState });
    });

    it('matches snapshot', () => {
      expect(wrapper.asFragment()).toMatchSnapshot();
    });
  });

  describe('when there is data', () => {
    beforeEach(() => {
      wrapper = render(<ContainerMovies />, { initialState });
    });

    it('should correctly render the number of movies', () => {
      expect(wrapper.getAllByRole('listitem')).toHaveLength(movies.length);
    });
  });

  describe('when there is no data', () => {
    beforeEach(() => {
      wrapper = render(<ContainerMovies />, {
        initialState: { movies: { movies: [] } },
      });
    });

    it('should return an empty array', () => {
      expect(wrapper.queryAllByRole('listitem')).toHaveLength(0);
    });
  });
});
