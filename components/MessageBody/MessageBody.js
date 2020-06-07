import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { MBWrapper, Title, LogOut, BasicInfo } from './MessageBody.style';
import { Modal, Popconfirm } from 'antd';
import InfoIndicator from './InfoIndicator';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { GetInfo } from 'relay/graphql/UserGraph';
import Router from 'next/router';
import EditInfo from './EditInfo';
import EditPassword from './EditPassword';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const MessageBody = ({}) => {
    const [visible, setVisible] = useState(false);
    const [profile, setProfile] = useState({name: '', email : '', phone: ''});
    const [newMessage, setNewMessage] = useState(false);
    const [activeRoom, setActiveRoom] = useState(null);
    const [isAddNew, setIsAddNew] = useState(false);
    const [editAvatar, setEditAvatar] = useState(false);
    const [editInfo, setEditInfo] = useState(false);
    const [editPassword, setEditPassword] = useState(false);
    const [isEditting, setIsEditting] = useState(false);

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
        if (isEditting) {
            Modal.confirm({
                title: 'Confirm',
                icon: <ExclamationCircleOutlined />,
                content: 'Are you sure?',
                okText: 'Confirm',
                cancelText: 'Cancel',
                onOk: () => {
                    setVisible(false);
                    setIsEditting(false);
                    if (editInfo) setEditInfo(false)
                    if (editPassword) setEditPassword(false)
                },
            })
        }
        else {
            setVisible(false);
        }
        
    }

    const createNewMessage = () => {
        if (isAddNew) setIsAddNew(false);
        setActiveRoom(null);
        setNewMessage(true);
    }

    const discardNewMessage = () => {
        setActiveRoom(null)
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

    const handleEditAvatar = () => {
        setIsEditting(true);
        setEditAvatar(true);
    }

    const handleEditInfo = () => {
        setIsEditting(true);
        setEditInfo(true);
    }

    const handleEditPassword = () => {
        setIsEditting(true);
        setEditPassword(true);
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

    const handleDiscardChange = () => {
        setIsEditting(false);
        if (editInfo) setEditInfo(false)
        if (editPassword) setEditPassword(false)
    }

    const title = <Title>Profile</Title>

    const edit = () => {
        if (editInfo) {
            return <EditInfo handleDiscardChange={handleDiscardChange}/>
        }
        else if (editPassword) {
            return <EditPassword handleDiscardChange={handleDiscardChange} email={profile.email} />
        }
    }

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
            footer={null}
        >   
            {isEditting ? edit() : 
            <>
            <BasicInfo>
                <InfoIndicator label="Avatar" content={null} handleEdit={handleEditAvatar} />
            </BasicInfo>
            <BasicInfo>
                <InfoIndicator label="Username" content={profile.name} noEditBtn={true} />
                <InfoIndicator label="Email" content={profile.email} handleEdit={handleEditInfo} />
                <InfoIndicator label="Phone" content={profile.phone} noEditBtn={true} />
            </BasicInfo>
            <BasicInfo>
                <InfoIndicator label="Password" content="Change your password" handleEdit={handleEditPassword} />
            </BasicInfo>
            <Popconfirm
                title="Are you sure to logout?"
                onConfirm={logOut}
                okText="Yes"
                cancelText="No"
            >
                <LogOut>Logout</LogOut>
            </Popconfirm>
            </>}
            
        </Modal>
    </MBWrapper>
}

export default MessageBody;