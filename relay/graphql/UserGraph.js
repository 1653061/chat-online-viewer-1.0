import { graphql } from 'react-relay';

export const UserInfo = graphql`
  query UserGraphInfoQuery {
    UserGraphInfo {
      message
      statusCode
    }
  }
`;
