import React from 'react';
import { HeaderWrapper } from './Header.style';

const Header = ({}) => {
    return <HeaderWrapper>
        <a href="/" className="logo">Chat Application</a>
        <div className="header-right">
            <a href="/" className="active">Home</a>
            <a href="/">Features</a>
            <a href="/">About Us</a>
        </div>
    </HeaderWrapper>
}

export default Header;