import React, { useState } from 'react';
import { commitMutation } from 'react-relay';
import { Container } from './SignUpForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import environment from 'relay/RelayEnvironment';
import { CreateAccount } from 'relay/graphql/UserGraph';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';
import Router from 'next/router';

const SignUpForm = ({ }) => {
  const [noti, setNoti] = useState(false);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const createAccount = ({
    fullname: name,
    password,
    email,
    phone,
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
        if (errors) {
          console.log(errors);
        }
        else {
          const { refreshToken, token, user } = UserGraphSignUp;
          document.cookie = `token=${token}`;
          document.cookie = `refreshToken=${refreshToken}`;
          localStorage.setItem('token', token);
          localStorage.setItem('refreshToken', refreshToken);
          Router.push('/message');
        }
        
      },
      onError: (err) => {
        setNoti(true);
        setTimeout(() => {
          setNoti(false)
        }, 5000);
      },
    });
  };

  return (
    <Container>
      {noti ? <div className="noti"><p className="content">Email was registed!</p></div> : null}
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
          phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
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
            type="text"
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