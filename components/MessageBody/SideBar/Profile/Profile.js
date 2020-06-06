import React from 'react';
import { ProfileWrapper, Btn, Icon, Logo } from './Profile.style';

const Profile = ({showModal, createNewMessage}) => {
    return <ProfileWrapper>
        <Logo src="/avatar.png" />
        <Btn onClick={createNewMessage}><Icon src="/new.png" /></Btn>
        <Btn className="rightedge" onClick={showModal}><Icon src="/setting.png" /></Btn>
    </ProfileWrapper>
}

export default Profile;