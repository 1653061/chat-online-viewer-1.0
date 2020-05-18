import React, { useState } from 'react';
import SideBar from './SideBar';
import MessageContainer from './MessageContainer';
import { MBWrapper } from './MessageBody.style';
import { Modal } from 'antd';
import InfoIndicator from './InfoIndicator';

const MessageBody = ({}) => {
    const [visible, setVisible] = useState(false);

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
            <InfoIndicator label="Id" content="abcxyz" />
            <InfoIndicator label="Username" content="Dam Quang Khai" />
            <InfoIndicator label="Email" content="dqk@gmail.com" lastItem={true} />
        </Modal>
    </MBWrapper>
}

export default MessageBody;