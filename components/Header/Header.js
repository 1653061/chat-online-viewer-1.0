import React from 'react';
import { HeaderWrapper, HeaderRight, LinkHandler } from './Header.style';
import Link from 'next/link';

const Header = ({}) => {
    return <HeaderWrapper>
        <Link href="/"><LinkHandler className="logo">Chat Application</LinkHandler></Link>
        <HeaderRight>
            <Link href="/"><LinkHandler className="active">Home</LinkHandler></Link>
            <Link href="/"><LinkHandler>Features</LinkHandler></Link>
            <Link href="/"><LinkHandler>About Us</LinkHandler></Link>
        </HeaderRight>
    </HeaderWrapper>
}

export default Header;