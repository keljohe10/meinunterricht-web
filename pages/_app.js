import { Provider as ReduxProvider } from 'react-redux';
import Head from 'next/head';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from '@/stores/store';

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  const persistor = persistStore(store, {}, () => {
    persistor.persist();
  });

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Head>
          <title>MeinUnterricht</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </ReduxProvider>
  );
};

export default MyApp;
