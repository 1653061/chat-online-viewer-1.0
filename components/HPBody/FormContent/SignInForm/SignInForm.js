import React from 'react';
import { Container } from './SignInForm.style';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SignInForm = ({}) => {
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
                <Button option='Primary' type="submit">
                    Sign In
                </Button>
            </Form>
        </Formik>
    </Container>
}

export default SignInForm;