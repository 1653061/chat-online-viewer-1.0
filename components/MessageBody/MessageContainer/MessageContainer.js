import React from 'react';
import { MCWrapper } from './MessageContainer.style';
import ChatTitle from './ChatTitle';
import ChatArea from './ChatArea';
import ChatComposer from './ChatComposer';

const MessageContainter = ({newMessage}) => {
    return <MCWrapper>
        <ChatTitle newMessage={newMessage} />
        <ChatArea />
        <ChatComposer />
    </MCWrapper>    
}

export default MessageContainter;