import { graphql } from 'react-relay';

export const UserInfo = graphql`
  query UserGraphInfoQuery {
    UserGraphInfo {
      message
      statusCode
    }
  }
`;

export const CreateAccount = graphql`
  mutation UserGraphCreateAccountMutation($input: CreateUserInput!) {
    UserGraphSignUp(input: $input) {
      token
      refreshToken
      user {
        name
        email
        phone
      }
    }
  }
`;

export const SignIn = graphql`
  mutation UserGraphSignInMutation($input: SignInUserInput!) {
    UserGraphSignIn(input: $input) {
      token
      refreshToken
      user {
        name
        email
        phone
      }
    }
  }
`;

export const VerifyToken = graphql`
  query UserGraphVerifyTokenQuery {
    UserGraphVerifyToken {
      token
      refreshToken
      user {
        name
        email
        phone
      }
    }
  }
`;
