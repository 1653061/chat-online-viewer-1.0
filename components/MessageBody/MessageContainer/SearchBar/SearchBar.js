import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';

const SearchBar = ({}) => {
    return <Formik
        initialValues={{
            email: ''
        }}
        onSubmit={() => console.log('Hello')}
    >   
        <Form>
            <TextInput 
                label="Email"
                name="email"
                type="text"
                placeholder="Email"
            />
            <Button option='Primary' type="submit">
                Search
            </Button>
        </Form>
    </Formik>
}

export default SearchBar;