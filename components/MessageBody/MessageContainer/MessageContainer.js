import React from 'react';
import { MCWrapper } from './MessageContainer.style';
import ChatTitle from './ChatTitle';
import ChatArea from './ChatArea';
import ChatComposer from './ChatComposer';
import SearchBar from './SearchBar';

const MessageContainter = ({newMessage}) => {
    return <MCWrapper>
        {newMessage ? <SearchBar /> : 
            <><ChatTitle/>
            <ChatArea />
            <ChatComposer /></>
        }
    </MCWrapper>    
}

export default MessageContainter;