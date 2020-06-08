import React, { useContext } from 'react';
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
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import MainContext from 'constants/MainContext';
import environment from 'relay/RelayEnvironment';
import { CreateMessage } from 'relay/graphql/RoomGraph';
import MessageContext from 'constants/MessageContext';
import { v4 } from 'uuid';
import * as Yup from 'yup';

const ChatComposer = ({ activeRoom }) => {
    const { currentUser } = useContext(MainContext);
    const { setShouldScrollToBottom } = useContext(MessageContext);

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
            optimisticUpdater: proxyStore => {
              const node = proxyStore.create(v4(), "Chat")
              node.setValue(textmessage, "message");
              node.setValue(currentUser._id, "ownerId");
              node.setValue(currentUser.name, "ownerName");
              const root = proxyStore.get(ROOT_ID);
              const chatAllQueryStore = root.getLinkedRecord(`RoomGraphGetAllMessage(roomId:"${activeRoom}")`);
              const connection = ConnectionHandler.getConnection(chatAllQueryStore, "GetAllRoomChatList_allChat", []);
              if (connection) {
                  const edge = ConnectionHandler.createEdge(
                      proxyStore,
                      connection,
                      node,
                      'ChatEdge',
                  );
                  setShouldScrollToBottom(true);
                  ConnectionHandler.insertEdgeAfter(connection, edge)
              }
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