import React, { useState, useEffect } from 'react';
import { ConfirmationWrapper } from './ConfirmationPage.style';
import { useRouter } from 'next/router';
import environment from 'relay/RelayEnvironment';
import { commitMutation } from 'react-relay';
import { VerifyEmailToken } from 'relay/graphql/UserGraph';
import Router from 'next/router';
import { Result, Button, message } from 'antd';

const ConfirmationPage = ({}) => {
    const router = useRouter();
    const [result, setResult] = useState({
        isShow: false,
        success: false
    });
    const token = router.query.token;

    const verifyEmailToken = () => {
        commitMutation(environment(), {
            mutation: VerifyEmailToken,
            variables: {
                input: {
                    token
                }
            },
            onCompleted: ({ UserGraphVerifyEmailToken }, errors) => {
                if (errors) {
                    console.log(errors);
                }
                else {
                    const { isVerified } = UserGraphVerifyEmailToken;
                    if (isVerified) {
                        setResult({
                            isShow: true,
                            success: true
                        });
                    }
                    else {
                        setResult({
                            isShow: true,
                            success: false
                        })
                    }
                }
            },
            onError: (err) => {
                console.log(err);
            }
        });
    };

    useEffect(
        () => {
            verifyEmailToken();
    }, []);

    const handleClick = () => {
        Router.push('/');
    }

    const showResult = () => {
        if (result.success) {
            return <Result
                status="success"
                title="Successfully Verified"
                subTitle="You can log in with this account"
                extra={
                    <Button type="primary" onClick={handleClick} >
                        Go to Homepage
                    </Button>
                }
            />
        }
        else {
            return <Result
                status="error"
                title="Failed to verify"
                subTitle="Check your mail again to verify"
                extra={
                    <Button type="primary" onClick={handleClick} >
                        Go to Homepage
                    </Button>
                }
            />
        }
    }

    return <ConfirmationWrapper>
        {result.isShow ? showResult() : message.loading('Please waiting to confirm...', 1)}
    </ConfirmationWrapper>
}

export default ConfirmationPage;