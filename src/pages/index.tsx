import Link from 'next/link';
import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { useViewerQuery, useUpdateNameMutation, ViewerDocument, ViewerQuery } from '../lib/viewer.graphql';
import { initializeApollo } from '../lib/apollo';
import { NormalizedCacheObject } from '@apollo/client';

const Index: () => ReactElement = () => {
  const viewer = useViewerQuery().data?.viewer;
  const [newName, setNewName] = useState('');
  const [updateNameMutation] = useUpdateNameMutation();

  const handleChangeName: (e: ChangeEvent<HTMLInputElement>) => void = useCallback(e => {
    setNewName(e.target.value);
  }, []);

  const handleUpdateName: () => void = useCallback(() => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      //Follow apollo suggestion to update cache
      //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      update: (store, mutationResult) => {
        // Read the data from our cache for this query.
        const queryResult = store.readQuery<ViewerQuery>({ query: ViewerDocument });

        if (queryResult && mutationResult.data) {
          const newViewer = { ...queryResult.viewer };
          // Add our comment from the mutation to the end.
          newViewer.name = mutationResult.data?.updateName.name;
          // Write our data back to the cache.
          store.writeQuery({ query: ViewerDocument, data: { viewer: newViewer } });
        }
      },
    });
  }, [updateNameMutation, newName]);

  return (
    <div>
      You are signed in as {viewer?.name} and you are {viewer?.status}. Go to the{' '}
      <Link href='/about'>
        <a>about</a>
      </Link>{' '}
      page.
      <div>
        <input type='text' placeholder='your new name...' onChange={handleChangeName} />
        <input type='button' value='change' onClick={handleUpdateName} />
      </div>
    </div>
  );
};

export async function getStaticProps(): Promise<{ props: { initialApolloState: NormalizedCacheObject } }> {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ViewerDocument,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Index;
