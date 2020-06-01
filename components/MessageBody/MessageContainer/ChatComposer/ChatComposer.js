import React from 'react';
import { ChatComposerWrapper } from './ChatComposer.style';
import MessageInput from './MessageInput';
import { Formik, Form } from 'formik';
import { commitMutation } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { CreateMessage } from 'relay/graphql/RoomGraph';

const ChatComposer = ({ activeRoom }) => {
    const sendMessage = ({ textmessage }) => {
        commitMutation(environment(), {
            mutation: CreateMessage,
            variables: {
              message: textmessage,
              roomId: activeRoom,
            },
            onCompleted: ({ RoomGraphAddNewChat }, errors) => {
              if (errors) {
                console.log(errors);
              }
              else {
                console.log("SearchBar -> CreateConnection", RoomGraphAddNewChat)
              }
              
            },
            updater: proxyStore => {
            //   const createConnection = proxyStore.getRootField('RoomGraphCreateRoom');
            //   const newRoom = createConnection.getLinkedRecord('room');
            //   const root = proxyStore.get(ROOT_ID);
            //   const roomAllQueryStore = root.getLinkedRecord("RoomGraphGetAllRoom");
            //   const connection = ConnectionHandler.getConnection(roomAllQueryStore, "GetAllRoomChatList_allRooms", []);
            //   if (connection) {
            //     ConnectionHandler.insertEdgeBefore(connection, newRoom)
            //   }
            },
            onError: (err) => {
              console.log(err);
            },
          });
    }

    return <ChatComposerWrapper>
        <Formik
            initialValues={{
                textmessage: '',
            }}
            onSubmit={sendMessage}
        >
            <Form>
                <div className="chatcomposer">
                    <MessageInput
                        name="textmessage"
                        type="input"
                        placeholder="Type a message..."
                    />
                    <div className="buttonarea">
                        <button className="send" ><img src="/send.png" className="icon" /></button>
                    </div>
                </div>
            </Form>
        </Formik>
    </ChatComposerWrapper>
}

export default ChatComposer;