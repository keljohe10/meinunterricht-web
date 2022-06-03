/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render, cleanup } from '@/tests/testUtils';

import MainLayout from '@/layouts/MainLayout/MainLayout';

beforeEach(cleanup);

describe('MainLayout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <MainLayout>
        <nav>mock</nav>
      </MainLayout>,
    );
  });

  it('matches snapshot', () => {
    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  it('should render the navbar', () => {
    expect(wrapper.getByText('mock')).toBeInTheDocument();
  });
});
