import React from 'react';
import { commitMutation } from 'react-relay';
import { Container } from './SignInForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import environment from 'relay/RelayEnvironment';
import { SignIn } from 'relay/graphql/UserGraph';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SignInForm = ({ }) => {
    const signIn = ({
        password,
        email
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
            if (errors) {
              console.log(errors);
            }
            else {
              const { refreshToken, token, user } = UserGraphSignIn;
              document.cookie = `token=${token}`;
              document.cookie = `refreshToken=${refreshToken}`;
              localStorage.setItem('token', token);
              localStorage.setItem('refreshToken', refreshToken);

            }
          },
          onError: (err) => console.log(err.name),
        });
      };

    return <Container>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Must be email")
                    .required('Required'),
                password: Yup.string()
                    .required('Required')
                    .min(8, 'At least 8 characters')
            })}
            onSubmit={signIn}
        >   
            <Form>
                <TextInput 
                    label="Email"
                    name="email"
                    type="text"
                    placeholder="Email"
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