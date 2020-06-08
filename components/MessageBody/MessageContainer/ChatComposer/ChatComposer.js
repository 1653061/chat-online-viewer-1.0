import React from 'react';
import { 
  ChatComposerWrapper,
  ChatComposerSection,
  ButtonArea,
  SendButton,
  Icon
} from './ChatComposer.style';
import MessageInput from './MessageInput';
import { Formik, Form } from 'formik';
import { commitMutation } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { CreateMessage } from 'relay/graphql/RoomGraph';
import * as Yup from 'yup';

const ChatComposer = ({ activeRoom }) => {
    const sendMessage = ({ textmessage }, actions) => {
        if (!textmessage.trim()) {
          actions.resetForm({});
          return;
        }
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
                actions.resetForm({});
              }
              
            },
            updater: proxyStore => {
              // const createConnection = proxyStore.getRootField('RoomGraphCreateRoom');
              // const newRoom = createConnection.getLinkedRecord('room');
              // const root = proxyStore.get(ROOT_ID);
              // const roomAllQueryStore = root.getLinkedRecord("RoomGraphGetAllRoom");
              // const connection = ConnectionHandler.getConnection(roomAllQueryStore, "GetAllRoomChatList_allRooms", []);
              // if (connection) {
              //   ConnectionHandler.insertEdgeBefore(connection, newRoom)
              // }
            },
            onError: (err) => {
              console.log(err);
            },
          });
    }

    return <ChatComposerWrapper>
        <Formik
            initialValues={{
                textmessage: null,
            }}
            onSubmit={sendMessage}
            validationSchema={Yup.object({
              textmessage: Yup.string()
                .trim()
                .nullable(false)
          })}
        >
          {({values}) => <Form>
                <ChatComposerSection>
                    <MessageInput
                        value= {values.textmessage || ''}
                        name="textmessage"
                        type="input"
                        placeholder="Type a message..."
                    />
                    <ButtonArea>
                        <SendButton type="submit" ><Icon src="/send.png" /></SendButton>
                    </ButtonArea>
                </ChatComposerSection>
            </Form>
          }
        </Formik>
    </ChatComposerWrapper>
}

export default ChatComposer;