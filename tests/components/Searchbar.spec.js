/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { act, fireEvent, render, cleanup, waitFor } from '@/tests/testUtils';
import mockAdapter from '@/tests/mockAdapter';

import Searchbar from '@/components/Searchbar/Searchbar';
import Home from '@/pages/index';

beforeEach(cleanup);

describe('Searchbar component', () => {
  let wrapper;

  const movies = {
    movies: [
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
    ],
  };

  beforeEach(() => {
    wrapper = render(
      <Home>
        <Searchbar typetext={() => true} />
      </Home>,
    );
  });

  it('matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('renders an input', () => {
    expect(wrapper.getByTestId('search-input')).toBeVisible();
  });

  it('renders a clear icon when theres some text and clears the input when pressed', async () => {
    const sampleText = 'someText';

    await act(async () => {
      fireEvent.change(wrapper.getByTestId('search-input'), {
        target: { value: sampleText },
      });
    });

    expect(wrapper.getByTestId('search-input').value).toBe(sampleText);
    expect(wrapper.getByTestId('clear-icon')).toBeVisible();

    await act(async () => {
      fireEvent.click(wrapper.getByTestId('clear-icon'));
    });

    expect(wrapper.getByTestId('search-input').value).toBe('');
  });

  it('renders 2 list elements when there is two results', async () => {
    const sampleText = 'sch';

    await act(async () => {
      fireEvent.change(wrapper.getByTestId('search-input'), {
        target: { value: sampleText },
      });
    });

    mockAdapter.onGet(`/movies`).reply(200, movies);

    await waitFor(
      () => {
        expect(wrapper.getByTestId('input-list')).toBeVisible();
        expect(wrapper.getAllByTestId('input-list-item').length).toBe(2);
      },
      {
        timeout: 1500,
      },
    );
  });
});
