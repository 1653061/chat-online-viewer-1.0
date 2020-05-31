import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { MBWrapper, Title } from './MessageBody.style';
import { Modal } from 'antd';
import InfoIndicator from './InfoIndicator';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { GetInfo } from 'relay/graphql/UserGraph';

const MessageBody = ({}) => {
    const [visible, setVisible] = useState(false);
    const [profile, setProfile] = useState({name: '', email : '', phone: ''});
    const [newMessage, setNewMessage] = useState(false);
    const [activeRoom, setActiveRoom] = useState(null);

    useEffect(() => {
        async function getProfile() {
            const { UserGraphGetInfo } = await fetchQuery(environment(), GetInfo, {});
            setProfile(UserGraphGetInfo);
        }
        getProfile();
    }, []);

    const showModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    const createNewMessage = () => {
        setNewMessage(true);
    }

    const discardNewMessage = () => {
        setNewMessage(false);
    }

    const getActiveRoom = (roomId, activeUser) => {
        setActiveRoom({
            roomId,
            activeUser
        });
    }

    const title = <Title>Profile</Title>
    return <MBWrapper>
        <SideBar 
            showModal={showModal} 
            newMessage={newMessage} 
            createNewMessage={createNewMessage} 
            discardNewMessage={discardNewMessage}
            getActiveRoom={getActiveRoom}
        />
        <MessageContainer newMessage={newMessage} activeRoom={activeRoom} />
        <Modal
            title={title}
            visible={visible}
            onCancel={closeModal}
            centered
            bodyStyle={{padding: '5px 20px'}}
            keyboard
            className="Khai"
        >
            <InfoIndicator label="Id" content="alo" />
            <InfoIndicator label="Username" content={profile.name} />
            <InfoIndicator label="Email" content={profile.email} />
            <InfoIndicator label="Phone" content={profile.phone} lastItem={true} />
        </Modal>
    </MBWrapper>
}

export default MessageBody;