/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@/tests/testUtils';

import MovieCard from '@/components/MovieCard/MovieCard';

beforeEach(cleanup);

describe('MovieCard component', () => {
  let wrapper;

  const initialValues = {
    title: 'Race to Space',
    director: 'Sean McNamara',
    plot: 'In the 1960s a young woman works at NASA as an animal trainer responsible for the chimpanzee who will go into space.',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTczNDUwMDA1NV5BMl5BanBnXkFtZTcwNTA5MTAwMQ@@._V1_SX300.jpg',
  };

  const renderComponent = props => render(<MovieCard {...props} />);

  it('matches snapshot', () => {
    const component = renderComponent(initialValues);

    expect(component.asFragment()).toMatchSnapshot();
  });

  it('should render movie information', () => {
    const component = renderComponent(initialValues);

    expect(component.getByText(initialValues.title)).toBeInTheDocument();
    expect(component.getByText(initialValues.director)).toBeInTheDocument();
    expect(component.getByTestId('poster')).toBeInTheDocument();
  });

  it('should render a movie icon when there is no a poster', () => {
    const component = renderComponent({ ...initialValues, poster: 'N/A' });

    expect(component.getByTestId('nofound-poster')).toBeInTheDocument();
  });
});
