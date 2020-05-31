import React from 'react';
import { ChatTitleWrapper } from './ChatTtitle.style';

const ChatTitle = ({activeUser}) => {
    return <ChatTitleWrapper>
        <img src="/avatar.png" className="logo" />
        <div className="nametitle"><div>{activeUser}</div></div>
        <button className="btn rightedge"><img src="/new.png" className="icon" /></button>
        <button className="btn"><img src="/setting.png" className="icon" /></button>
    </ChatTitleWrapper>
}

export default ChatTitle;