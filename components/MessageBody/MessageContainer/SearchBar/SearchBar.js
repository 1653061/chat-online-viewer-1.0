import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import Button from 'components/Button';
import { commitMutation } from 'react-relay';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import environment from 'relay/RelayEnvironment';
import { CreateConnection } from 'relay/graphql/RoomGraph';
import SearchInput from './SearchInput';
import { SearchBarWrapper } from './SearchBar.style';
import * as Yup from 'yup';

const SearchBar = ({}) => {
  const [noti, setNoti] = useState({
    isNotified: false, 
    message: null
  });

  return <SearchBarWrapper>
    <div class="tablecell">
      {noti.isNotified ? <div className="notiwrapper"><div className="noti">
          <p className="content">
            {noti.message}.
          </p>
      </div></div> : null}
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Must be email')
            .required('Required')
        })}
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
                setNoti({
                  isNotified: true,
                  message: err
                });
                setTimeout(() => {
                  setNoti({
                    isNotified: false,
                    messgae: null
                  })
                }, 5000);
              },
          });
      }}
    >   
        <Form className="SearchForm">
            <SearchInput 
                name="email"
                type="text"
                placeholder="Type email of someone to start messaging"
            />
            <div className="searchbutton">
              <Button option='Primary' type="submit">
                  Start Messaging
              </Button>
            </div>
        </Form>
      </Formik>
    </div>
  </SearchBarWrapper>
}

export default SearchBar;