import React from 'react';
import { SBWrapper } from './Sidebar.style';
import Profile from './Profile';

const SideBar = ({showModal}) => {
    return <SBWrapper>
        <Profile showModal={showModal} />
    </SBWrapper>
}

export default SideBar;