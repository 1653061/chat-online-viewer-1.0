import React from 'react';
import { HeaderWrapper, HeaderRight, LinkHandler } from './Header.style';
import Link from 'next/link';

const Header = ({isHome, isFeature, isAbout}) => {
    return <HeaderWrapper>
        <Link href="/"><LinkHandler className="logo">Chat Application</LinkHandler></Link>
        <HeaderRight>
            <Link href="/"><LinkHandler className={isHome && 'active'}>Home</LinkHandler></Link>
            <Link href="/Feature"><LinkHandler className={isFeature && 'active'} >Features</LinkHandler></Link>
            <Link href="/About"><LinkHandler className={isAbout && 'active'} >About Us</LinkHandler></Link>
        </HeaderRight>
    </HeaderWrapper>
}

export default Header;