import React from 'react';
import { commitMutation } from 'react-relay';
import { Container } from './SignUpForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import environment from 'relay/RelayEnvironment';
import { CreateAccount } from 'relay/graphql/UserGraph';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SignUpForm = ({}) => {
  const createAccount = ({
    username: name,
    password,
    email = 'huanhiendanh@gmail.com',
    phone = 123456,
  }) => {
    commitMutation(environment(), {
      mutation: CreateAccount,
      variables: {
        input: {
          name,
          password,
          email,
          phone,
        },
      },
      onCompleted: ({ UserGraphSignUp }, errors) => {
        const { refreshToken, token, user } = UserGraphSignUp;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          password: '',
          repassword: '',
        }}
        validationSchema={Yup.object({
          username: Yup.string().required('Required'),
          password: Yup.string()
            .required('Required')
            .min(8, 'At least 8 characters'),
          repassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={createAccount}
      >
        <Form>
          <TextInput
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextInput
            label="Repassword"
            name="repassword"
            type="password"
            placeholder="Re Password"
          />
          <Button option="Success" type="submit">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </Container>
  );
};

export default SignUpForm;
