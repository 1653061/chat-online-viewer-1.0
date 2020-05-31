import React from 'react';
import { Formik, Form } from 'formik';
import TextInput from 'components/Form/TextInput';
import Button from 'components/Button';
import { commitMutation } from 'react-relay';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import environment from 'relay/RelayEnvironment';
import { CreateConnection } from 'relay/graphql/RoomGraph';

const SearchBar = ({}) => {
    return <Formik
        initialValues={{
            email: ''
        }}
        onSubmit={({ email }) => {
            commitMutation(environment(), {
                mutation: CreateConnection,
                variables: {
                  email,
                },
                onCompleted: ({ RoomGraphCreateRoom }, errors) => {
                  if (errors) {
                    console.log(errors);
                  }
                  else {
                    console.log("SearchBar -> CreateConnection", RoomGraphCreateRoom)
                  }
                  
                },
                updater: proxyStore => {
                  const createConnection = proxyStore.getRootField('RoomGraphCreateRoom');
                  const newRoom = createConnection.getLinkedRecord('room');
                  const root = proxyStore.get(ROOT_ID);
                  const roomAllQueryStore = root.getLinkedRecord("RoomGraphGetAllRoom");
                  const connection = ConnectionHandler.getConnection(roomAllQueryStore, "GetAllRoomChatList_allRooms", []);
                  if (connection) {
                    ConnectionHandler.insertEdgeBefore(connection, newRoom)
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