import React from 'react';
import { 
    ChatTitleWrapper,
    Logo,
    NameTitle,
    Name,
    Btn,
    Icon
} from './ChatTtitle.style';

const ChatTitle = ({activeUser}) => {
    return <ChatTitleWrapper>
        <Logo src="/avatar.png" />
        <NameTitle><Name>{activeUser ? activeUser : ''}</Name></NameTitle>
        <Btn className="rightedge"><Icon src="/new.png" /></Btn>
        <Btn className="btn"><Icon src="/setting.png" /></Btn>
    </ChatTitleWrapper>
}

export default ChatTitle;