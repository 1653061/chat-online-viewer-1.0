import React, { useState, useEffect } from 'react';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { MBWrapper } from './MessageBody.style';
import { Modal } from 'antd';
import InfoIndicator from './InfoIndicator';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { GetInfo } from 'relay/graphql/UserGraph';

const MessageBody = ({}) => {
    const [visible, setVisible] = useState(false);
    const [profile, setProfile] = useState({name: '', email : '', phone: ''});

    useEffect(() => {
        async function getProfile() {
            const { UserGraphGetInfo } = await fetchQuery(environment(), GetInfo, {});
            console.log(UserGraphGetInfo);
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

    return <MBWrapper>
        <SideBar showModal={showModal} />
        <MessageContainer />
        <Modal
            title="Profile"
            visible={visible}
            onCancel={closeModal}
            centered
            bodyStyle={{padding: '5px 20px'}}
            keyboard
        >
            <InfoIndicator label="Id" content="alo" />
            <InfoIndicator label="Username" content={profile.name} />
            <InfoIndicator label="Email" content={profile.email} />
            <InfoIndicator label="Phone" content={profile.phone} lastItem={true} />
        </Modal>
    </MBWrapper>
}

export default MessageBody;