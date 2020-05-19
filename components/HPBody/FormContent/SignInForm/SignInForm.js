import React from 'react';
import { commitMutation } from 'react-relay';
import { Container } from './SignInForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import environment from 'relay/RelayEnvironment';
import { SignIn } from 'relay/graphql/UserGraph';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SignInForm = ({}) => {

    const signIn = ({
        username: name,
        password,
        email = 'huanhiendanh@gmail.com',
      }) => {
        commitMutation(environment(), {
          mutation: SignIn,
          variables: {
            input: {
              password,
              email,
            },
          },
          onCompleted: ({ UserGraphSignIn }, errors) => {
          console.log("SignInForm -> UserGraphSignIn", UserGraphSignIn)
            const { refreshToken, token, user } = UserGraphSignIn;
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
          },
          onError: (err) => console.error(err),
        });
      };

    return <Container>
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required')
                    .min(8, 'At least 8 characters')
            })}
            onSubmit={signIn}
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
                <Button option='Primary' type="submit">
                    Sign In
                </Button>
            </Form>
        </Formik>
    </Container>
}

export default SignInForm;