import React from 'react';
import { SBWrapper } from './Sidebar.style';
import Profile from './Profile';
import FriendList from './FriendList';

const SideBar = ({showModal, newMessage, createNewMessage, discardNewMessage}) => {
    return <SBWrapper>
        <Profile 
            showModal={showModal} 
            createNewMessage={createNewMessage} 
        />
        <FriendList 
            newMessage={newMessage} 
            discardNewMessage={discardNewMessage}
        />
    </SBWrapper>
}

export default SideBar;