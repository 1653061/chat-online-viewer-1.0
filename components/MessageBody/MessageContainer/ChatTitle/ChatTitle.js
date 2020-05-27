import React from 'react';
import { ChatTitleWrapper } from './ChatTtitle.style';

const ChatTitle = ({}) => {
    return <ChatTitleWrapper>
        <img src="/avatar.png" className="logo" />
        <div className="nametitle"><div>Dam Quang Khai</div></div>
        <button className="btn rightedge" onClick=""><img src="/new.png" className="icon" /></button>
        <button className="btn" onClick=""><img src="/setting.png" className="icon" /></button>
    </ChatTitleWrapper>
}

export default ChatTitle;