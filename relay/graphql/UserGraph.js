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

export const SignInWith = graphql`
  mutation UserGraphSignInWithMutation($input: SigninWithInput!) {
    UserGraphSignInWith(input: $input) {
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

export const SendMailResetPassword = graphql`
  mutation UserGraphSendMailResetPasswordMutation($email: String!) {
    UserGraphSendMailResetPassword(email: $email) {
      message
      statusCode
    }
  }   
`

export const ResetPassword = graphql`
  mutation UserGraphResetPasswordMutation($input: ResetPasswordInput!) {
    UserGraphResetPassword(input: $input) {
      message
      statusCode
    }
  }
`

export const ChangePassword = graphql`
  mutation UserGraphChangePassowordMutation($input: ChangePasswordInput!) {
    UserGraphChangePassword(input: $input) {
      message
      statusCode
    }
  }
`
