import React from 'react';
import { Formik, Form } from 'formik';
import EditInput from '../EditInput';
import Button from 'components/Button';
import * as Yup from 'yup';
import { Modal, notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { ButtonSection, ButtonGroup } from './EditPassword.style';
import { commitMutation } from 'react-relay';
import { ChangePassword } from 'relay/graphql/UserGraph'; 
import environment from 'relay/RelayEnvironment';

const EditInfo = ({handleDiscardChange, email}) => {
    const changePassword = ({currentpassword, password}) => {
        commitMutation(environment(), {
            mutation: ChangePassword,
            variables: {
                input: {
                    email,
                    currentpassword,
                    password
                },
            },
            onCompleted: ({ UserGraphChangePassword }, errors) => {
                if (errors) {
                    console.log(errors);
                }
                else {
                    const { message, statusCode } = UserGraphChangePassword;
                    if (statusCode === 200) {
                        notification['success']({
                            message: statusCode,
                            description: message
                        });
                    }
                    else {
                        notification['error']({
                            message: statusCode,
                            description: message
                        });
                    }

                    handleDiscardChange();
                }
            },
            onError: (err) => { }
        });
    }

    return <Formik
        initialValues={{
            currentpassword: '',
            password: '',
            confirmpassword: '',
        }}
        validationSchema={Yup.object({
            currentpassword: Yup.string()
                .required('Required')
                .min(8, 'At least 8 characters'),
            password: Yup.string()
                .required('Required')
                .min(8, 'At least 8 characters'),
            confirmpassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        })}
        onSubmit={changePassword}
        onReset={() => {
            Modal.confirm({
                title: 'Confirm',
                icon: <ExclamationCircleOutlined />,
                content: 'Are you sure?',
                okText: 'Confirm',
                cancelText: 'Cancel',
                onOk: () => {
                    handleDiscardChange()
                },
            })
        }}
    >   
        <Form>
            <EditInput 
                label="Current Password"
                name="currentpassword"
                type="password"
                placeholder="Current Password"
            />
            <EditInput 
                label="New Password"
                name="password"
                type="password"
                placeholder="New Password"
            />
            <EditInput
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                placeholder="Confirm Password"
            />
            <ButtonGroup>
                <ButtonSection>
                    <Button option="Danger" type="reset">
                        Discard Change
                    </Button>
                </ButtonSection>
                <ButtonSection>
                    <Button option='Success' type="submit">
                        Save Change
                    </Button>
                </ButtonSection>
            </ButtonGroup>
        </Form>
    </Formik>
}

export default EditInfo;