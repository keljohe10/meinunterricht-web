import { useMemo } from 'react';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies';

let store;

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const makeStore = preloadedState =>
  configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
    preloadedState,
  });

export function initializeStore(preloadedState = {}) {
  // eslint-disable-next-line no-underscore-dangle
  let _store = store || makeStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = makeStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
