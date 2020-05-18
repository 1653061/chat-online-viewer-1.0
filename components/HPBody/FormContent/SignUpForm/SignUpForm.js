import React from 'react';
import { Container } from './SignUpForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SignUpForm = ({}) => {
    return <Container>
        <Formik
            initialValues={{
                username: '',
                password: '',
                repassword: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .required('Required'),
                password: Yup.string()
                    .required('Required')
                    .min(8, 'At least 8 characters'),
                repassword: Yup.string()
                    .required('Required')
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
            })}
            onSubmit={() => console.log("Submited!")}
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
                <TextInput 
                    label="Repassword"
                    name="repassword"
                    type="password"
                    placeholder="Re Password"
                />
                <Button option='Success' type="submit">
                    Sign Up
                </Button>
            </Form>
        </Formik>
    </Container>
}

export default SignUpForm;