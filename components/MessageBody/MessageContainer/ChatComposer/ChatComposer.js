import React from 'react';
import { ChatComposerWrapper } from './ChatComposer.style';
import MessageInput from './MessageInput';
import { Formik, Form } from 'formik';

const ChatComposer = ({}) => {
    return <ChatComposerWrapper>
        <Formik
            initialValues={{
                textmessage: '',
            }}
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