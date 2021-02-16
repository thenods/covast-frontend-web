import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apollo';
import { ReactElement } from 'react';
import useViewport from '../hooks/useViewport';

import '../../public/css/main.css';

export default function App({ Component, pageProps }: AppProps): ReactElement<AppProps> {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useViewport();

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
