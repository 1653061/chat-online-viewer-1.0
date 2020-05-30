import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';
import { commitMutation } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { CreateConnection } from 'relay/graphql/RoomGraph';

const SearchBar = ({}) => {
    return <Formik
        initialValues={{
            email: ''
        }}
        onSubmit={({ email }) => {
            console.log(email);
            commitMutation(environment(), {
                mutation: CreateConnection,
                variables: {
                  email,
                },
                onCompleted: ({ CreateConnection }, errors) => {
                  if (errors) {
                    console.log(errors);
                  }
                  else {
                    console.log('success');
                  }
                  
                },
                onError: (err) => {
                  console.log(err);
                },
              });
        }}
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