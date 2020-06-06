import React, { useState } from 'react';
import { RPPageWrapper, FormCard } from './ResetPasswordPage.style';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PasswordInput from './PasswordInput';
import MyButton from 'components/Button';
import environment from 'relay/RelayEnvironment';
import { commitMutation } from 'react-relay';
import { ResetPassword } from 'relay/graphql/UserGraph';
import { Result, Button } from 'antd';
import Router from 'next/router';
import { useRouter } from 'next/router';

const ResetPasswordPage = ({}) => {
    const router = useRouter();
    const token = router.query.token;
    const [showResult, setShowResult] = useState(null);

    const goHome = () => {
        Router.push('/');
    }

    const sendRequestPassword = () => {
        Router.push('/requestresetpassword');
    }

    return <RPPageWrapper>
        {showResult ? <Result
                status= {showResult.status}
                title= {showResult.title}
                subTitle= {showResult.subTitle}
                extra={showResult.status === 'success' ?
                    <Button type="primary" onClick={goHome}>
                        Go to Homepage
                    </Button> :
                    <Button type="primary" onClick={goHome}>
                        Send mail again
                    </Button>
                }
            /> : 
        <FormCard>
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: ''
                }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .min(8, 'Must be 8 characters or more')
                        .required('Required'),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Required'),
                })}
                onSubmit={
                    ({password}) => {
                        commitMutation(environment(), {
                            mutation: ResetPassword,
                            variables: {
                                input: {
                                    token,
                                    password
                                }
                            },
                            onCompleted: ({ UserGraphResetPassword }, errors) => {
                                if (errors) {
                                    console.log(errors);
                                }
                                else {
                                    setShowResult({
                                        status: 'success',
                                        title: UserGraphResetPassword.message,
                                        subTitle: 'You can sign in with your new password'
                                    })
                                }
                            },
                            onError: (err) => {
                                setShowResult({
                                    status: 'error',
                                    title: err,
                                    subTitle: 'Your submission has been failed'
                                })
                            }
                        })
                    }
                }
            >
                <Form>
                    <PasswordInput 
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter new password"
                    />
                    <PasswordInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm new password"
                    />
                    <MyButton type="submit" option="Success">Submit</MyButton>
                </Form>
            </Formik>
        </FormCard>
        }
    </RPPageWrapper>
}

export default ResetPasswordPage;