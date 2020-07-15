import React from 'react';
import Card from './Card';
import Card404 from './NotFound'
import Heading from './Heading'
import { GraphQL, GraphQLProvider, useGraphQL } from 'graphql-react';

// Zero config GraphQL client that manages the cache.
const graphql = new GraphQL();

const PackageTracking = ({ sandbox, trackingId }) => {
  const { loading, cacheValue = {} } = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = 'http://localhost:4000/graphql';
    },
    operation: {
      query: `{ package(storeId: "${sandbox}", trackingId: "${trackingId}") { storeId, trackingId, events { event_message, event_date } } }`,
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  return cacheValue.data && cacheValue.data.package ? (
    [
      <Heading packageEvents={cacheValue.data.package}></Heading>,
      <Card packageEvents={cacheValue.data.package}></Card>
    ]
  ) : loading ? (
      '🐱‍💻🐱‍💻🐱‍💻'
    ) : (
        <Card404></Card404>
      );
};

const state = window.location?.pathname.replace('/', '').split('/')

const App = () => (
  <GraphQLProvider graphql={graphql}>
    <div className="p-5">
      <div className="max-w-md mx-auto">
        <PackageTracking sandbox={state[0]} trackingId={state[1]} />
      </div>
    </div>
  </GraphQLProvider>
);

export default App;
