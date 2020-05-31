import React from 'react';
import { MCWrapper } from './MessageContainer.style';
import ChatTitle from './ChatTitle';
import ChatArea from './ChatArea';
import ChatComposer from './ChatComposer';
import SearchBar from './SearchBar';

const MessageContainter = ({newMessage, activeRoom}) => {
    return <MCWrapper>
        {newMessage ? <SearchBar /> : 
            <><ChatTitle activeUser={activeRoom.activeUser} />
            <ChatArea activeRoom={activeRoom.roomId} />
            <ChatComposer /></>
        }
    </MCWrapper>    
}

export default MessageContainter;