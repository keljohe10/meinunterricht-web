/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@/tests/testUtils';

import Home from '@/pages/index';

beforeEach(cleanup);

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Home />);
  });

  it('matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });
});
