import React, { useState, useEffect } from 'react';
import { ConfirmationWrapper } from './ConfirmationPage.style';
import { useRouter } from 'next/router';
import environment from 'relay/RelayEnvironment';
import { commitMutation } from 'react-relay';
import { VerifyEmailToken } from 'relay/graphql/UserGraph';
import Router from 'next/router';

const ConfirmationPage = ({}) => {
    const router = useRouter();
    const [isShowDialog, setIsShowDialog] = useState(false);
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
                        Router.push('/message');
                    }
                    else {
                        setIsShowDialog(true);
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

    return <ConfirmationWrapper>
        {isShowDialog ? 'Failed verify' : 'Please waiting to confirmation.'}
    </ConfirmationWrapper>
}

export default ConfirmationPage;