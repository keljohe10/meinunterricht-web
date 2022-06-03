import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { initializeStore } from '@/stores/store';

const customRender = (
  component,
  { initialState = {}, store = initializeStore(initialState) } = {},
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
