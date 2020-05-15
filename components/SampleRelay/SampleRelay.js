import React from 'react';
import { QueryRenderer } from 'react-relay';
import { UserInfo } from 'relay/graphql/UserGraph';
import environment from 'relay/RelayEnvironment';
import { SampleRelayWrapper, SampleRelayMain } from './SampleRelay.style';

const SampleRelay = ({}) => {
  return (
    <QueryRenderer
      environment={environment()}
      query={UserInfo}
      variables={{}}
      render={({ error, props }) => {
        if (error) {
          return <div>Error!</div>;
        }
        if (!props) {
          return <div>Loading...</div>;
        }
        return (
          <SampleRelayWrapper>
            <SampleRelayMain>{props.message}</SampleRelayMain>
          </SampleRelayWrapper>
        );
      }}
    />
  );
};

export default SampleRelay;
