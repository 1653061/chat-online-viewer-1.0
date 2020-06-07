import React, { useState, useContext } from 'react';
import { commitMutation } from 'react-relay';
import { Container, SignInWithGoogle, SignInWithFacebook, Noti, Content, LinkHandler, Img } from './SignInForm.style';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import environment from 'relay/RelayEnvironment';
import { SignIn, SignInWith } from 'relay/graphql/UserGraph';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';
import Router from 'next/router';
import GoogleLogin from 'react-google-login';
import MainContext from 'constants/MainContext';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const SignInForm = ({enableMessage}) => {
  const { setCurrentUser } = useContext(MainContext);
  const [noti, setNoti] = useState({
    isNotified: false, 
    message: null
  });

  const signIn = ({
      password,
      email
    }) => {
      if (noti.isNotified === true) {
        setNoti({
          isNotified: false,
          message: null
        })
      }
      enableMessage();
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
            setCurrentUser(user);
            Router.push('/message');
          }
        },
        onError: (err) => {
          setNoti({
            isNotified: true,
            message: err
          });
          if (err !== 'Account is not verified') {
            setTimeout(() => {
              setNoti({
                isNotified: false,
                messgae: null
              })
            }, 5000);
          }
        }
      });
    };

    const signInWith = (email, name) => {
      enableMessage();
      commitMutation(environment(), {
        mutation: SignInWith,
        variables: {
          input: {
            email,
            name
          },
        },
        onCompleted: ({ UserGraphSignInWith}, errors) => {
          if (errors) {
            console.log(errors);
          }
          else {
            const { refreshToken, token, user } = UserGraphSignInWith;
            document.cookie = `token=${token}`;
            document.cookie = `refreshToken=${refreshToken}`;
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            setCurrentUser(user);
            Router.push('/message');
          }
        },
        onError: (err) => {
          setNoti({
            isNotified: true,
            message: err
          });
        }
      });
    };

    return <Container>
      {noti.isNotified ? <Noti>
        <Content>
          {noti.message}.
          {noti.message === 'Account is not verified' ? <LinkHandler> Click here to resend activation code</LinkHandler> : null}
        </Content>
      </Noti> : null}
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
      <GoogleLogin 
        clientId={process.env.GOOGLE_CLIENTID}
        buttonText="Sign in with Google"
        onSuccess={
          res => {
            const name = res.profileObj.givenName + ' ' + res.profileObj.familyName;
            signInWith(res.profileObj.email, name);
          }
        }
        onFailure={err => {
          console.log(err)
          }
        }
        cookiePolicy='single_host_origin'
        render={renderProps => (
          <SignInWithGoogle 
            onClick={renderProps.onClick} 
            disabled={renderProps.disabled}>
            <Img src="/google.png" className="icon" />
            Sign in with Google
          </SignInWithGoogle>
        )}
      />
      <FacebookLogin
        appId={process.env.FACEBOOK_APPID}
        fields="name,email"
        callback={res => {
          signInWith(res.email, res.name);
        }} 
        render={renderProps => (
          <SignInWithFacebook 
            onClick={renderProps.onClick}
            disabled={renderProps.isDisabled}
          >
            <Img src="/facebook.png" className="icon" />
            Sign in with Facebook
          </SignInWithFacebook>
        )}
        />
      
    </Container>
}

export default SignInForm;