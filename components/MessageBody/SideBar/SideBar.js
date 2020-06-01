import React from 'react';
import { SBWrapper } from './Sidebar.style';
import { QueryRenderer } from 'react-relay';
import { GetAllRoom } from 'relay/graphql/RoomGraph';
import environment from 'relay/RelayEnvironment';
import Profile from './Profile';
import FriendList from './FriendList';

const SideBar = ({showModal, newMessage, createNewMessage, discardNewMessage, getActiveRoom}) => {
    return <SBWrapper>
        <Profile 
            showModal={showModal} 
            createNewMessage={createNewMessage} 
        />
        <QueryRenderer environment={environment()} query={GetAllRoom} variables={{count: 10, cursor: ''}} render={({ error, props }) => {
            if (!props || error) {
                return null;
            }
            return <FriendList 
            newMessage={newMessage} 
            discardNewMessage={discardNewMessage}
            rooms={props.RoomGraphGetAllRoom}
            getActiveRoom={getActiveRoom}
        /> 
        }}/>
    </SBWrapper>
}

export default SideBar;