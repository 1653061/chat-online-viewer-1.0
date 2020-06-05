import React, { useState } from 'react';
import { RRPPageWrapper, FormCard } from './RequestResetPasswordPage.style';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import EmailInput from './EmailInput';
import Button from 'components/Button';
import { commitMutation } from 'react-relay';
import { SendMailResetPassword } from 'relay/graphql/UserGraph';
import { notification } from 'antd';
import environment from 'relay/RelayEnvironment';

const ResetPasswordPage = ({}) => {
    const [noti, setNoti] = useState(null);

    return <RRPPageWrapper>
        {noti && notification[noti.type]({
            message: noti.message,
            description: noti.description
        })}
        <FormCard>
            <Formik
                initialValues={{
                    email: ''
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Must be email')
                        .required('Required'),
                })}
                onSubmit={
                    ({email}) => {
                        commitMutation(environment(), {
                            mutation: SendMailResetPassword,
                            variables: {
                                email: email
                            },
                            onCompleted: ({ UserGraphSendMailResetPassword }, errors) => {
                                if (errors) {
                                    console.log(errors);
                                }
                                else {
                                    const type = UserGraphSendMailResetPassword.statusCode === 200 ? 'success' : 'error';
                                    setNoti({
                                        type,
                                        message: UserGraphSendMailResetPassword.statusCode,
                                        description: UserGraphSendMailResetPassword.message
                                    });
                                }
                            },
                            onError: (err) => {
                                console.log(err);
                            }
                        })
                    }
                }
            >
                <Form>
                    <EmailInput
                        label="Email"
                        name="email"
                        type="text"
                        placeholder="Email"
                    />
                    <div> 
                        <Button type="submit" option="Success">Submit</Button>
                    </div>
                    
                </Form>
            </Formik>
        </FormCard>
    </RRPPageWrapper>
}

export default ResetPasswordPage;