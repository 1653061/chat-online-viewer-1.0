import React from 'react';
import Router from 'next/router'
import { 
    ChatTitleWrapper,
    Logo,
    NameTitle,
    Name,
    Btn,
    Icon
} from './ChatTtitle.style';

const ChatTitle = ({activeUser, activeRoom}) => {
    return <ChatTitleWrapper>
        <Logo src="/avatar.png" />
        <NameTitle><Name>{activeUser ? activeUser : ''}</Name></NameTitle>
        <Btn className="rightedge" onClick={() => {
            Router.push(`/call/${activeRoom.roomId}`);
        }}><Icon src="/phone.png" /></Btn>
        {/* <Btn className="btn"><Icon src="/setting.png" /></Btn> */}
    </ChatTitleWrapper>
}

export default ChatTitle;