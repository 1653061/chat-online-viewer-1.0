import React from 'react';
import { ProfileWrapper } from './Profile.style';

const Profile = ({showModal, createNewMessage}) => {
    return <ProfileWrapper>
        <img src="/avatar.png" className="logo" />
        <button className="btn" onClick={createNewMessage}><img src="/new.png" className="icon" /></button>
        <button className="btn rightedge" onClick={showModal}><img src="/setting.png" className="icon" /></button>
    </ProfileWrapper>
}

export default Profile;