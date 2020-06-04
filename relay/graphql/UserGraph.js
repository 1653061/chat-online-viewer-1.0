import { graphql } from 'react-relay';

export const CreateAccount = graphql`
  mutation UserGraphCreateAccountMutation($input: CreateUserInput!) {
    UserGraphSignUp(input: $input) {
      message
      statusCode
    }
  }
`;

export const SignIn = graphql`
  mutation UserGraphSignInMutation($input: SignInUserInput!) {
    UserGraphSignIn(input: $input) {
      token
      refreshToken
      user {
        _id
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
        _id
        name
        email
        phone
      }
    }
  }
`;

export const GetInfo = graphql`
  query UserGraphGetInfoQuery {
    UserGraphGetInfo {
      _id
      name
      email
      phone
    }
  }
`;

export const VerifyEmailToken = graphql`
  mutation UserGraphVerifyEmailTokenMutation($input: EmailVerifyTokenInput!) {
    UserGraphVerifyEmailToken(input: $input) {
      isVerified
    }
  }
`

export const SignInWithGoogle = graphql`
  mutation UserGraphSignInWithGoogleMutation($input: GoogleSigninInput!) {
    UserGraphSignInWithGoogle(input: $input) {
      token
      refreshToken
      user {
        _id
        name
        email
        phone
      }
    }
  }
`
