import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { MBWrapper, Title, LogOut } from './MessageBody.style';
import { Modal } from 'antd';
import InfoIndicator from './InfoIndicator';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { GetInfo } from 'relay/graphql/UserGraph';
import Router from 'next/router';

const MessageBody = ({}) => {
    const [visible, setVisible] = useState(false);
    const [profile, setProfile] = useState({name: '', email : '', phone: ''});
    const [newMessage, setNewMessage] = useState(false);
    const [activeRoom, setActiveRoom] = useState(null);
    const [isAddNew, setIsAddNew] = useState(false);

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
        if (isAddNew) setIsAddNew(false);
        setNewMessage(true);
    }

    const discardNewMessage = () => {
        setNewMessage(false);
    }

    const getActiveRoom = (roomId, activeUser) => {
        if (isAddNew) setIsAddNew(false);
        setNewMessage(false);
        setActiveRoom({
            roomId,
            activeUser
        });
    }

    const logOut = () => {
        document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        document.cookie = 'refreshToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        Router.push('/');
    }

    const handleSearchDone = () => {
        setNewMessage(false);
        setIsAddNew(true);
    }

    const title = <Title>Profile</Title>
    return <MBWrapper>
        <SideBar 
            showModal={showModal} 
            newMessage={newMessage} 
            createNewMessage={createNewMessage} 
            discardNewMessage={discardNewMessage}
            getActiveRoom={getActiveRoom}
            isAddNew={isAddNew}
        />
        <MessageContainer newMessage={newMessage} activeRoom={activeRoom} handleSearchDone={handleSearchDone} />
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
            <InfoIndicator label="Phone" content={profile.phone} />
            <LogOut onClick={logOut}>Logout</LogOut>
        </Modal>
    </MBWrapper>
}

export default MessageBody;