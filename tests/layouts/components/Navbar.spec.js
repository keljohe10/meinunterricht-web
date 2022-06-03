/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@/tests/testUtils';

import Navbar from '@/layouts/components/Navbar';

beforeEach(cleanup);

describe('Navbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Navbar />);
  });

  it('matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('should render the logo', () => {
    expect(
      wrapper.getByText('MeinUnterricht', { exact: false }),
    ).toBeInTheDocument();
  });
});
