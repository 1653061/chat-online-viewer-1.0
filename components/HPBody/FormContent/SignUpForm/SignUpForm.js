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
    fullname: name,
    password,
    email,
    phone,
  }) => {
    console.log('Here');
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
      onError: (err) => console.log(err),
    });
  };

  return (
    <Container>
      <Formik
        initialValues={{
          fullname: '',
          email: '',
          phone: '',
          password: '',
          confirmpassword: '',
        }}
        validationSchema={Yup.object({
          fullname: Yup.string().required('Required'),
          email: Yup.string()
            .email('Must be email')
            .required('Required'),
          phone: Yup.number()
            .required('Required'),
          password: Yup.string()
            .required('Required')
            .min(8, 'At least 8 characters'),
          confirmpassword: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={createAccount}
      >
        <Form>
          <TextInput
            label="Full Name"
            name="fullname"
            type="text"
            placeholder="Full Name"
          />
          <TextInput
            label="Email"
            name="email"
            type="text"
            placeholder="Email"
          />
          <TextInput
            label="Phone"
            name="phone"
            type="number"
            placeholder="Phone"
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <TextInput
            label="Confirm Password"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
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
