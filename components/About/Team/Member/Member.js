import React from 'react';
import { Container, Avatar, Info, FacebookLogo, FacebookLink } from './Member.style'

const Member = ({src, text, desp, fblink}) => {
    return <Container>
        <Avatar src={src} alt="Avatar Image"/>
        <Info className="Name">{text}</Info>
        <Info className="Desp">{desp}</Info>
        <FacebookLink href={fblink} target="_blank" ><FacebookLogo src="/facebooklogo.png" /></FacebookLink>
    </Container>
}

export default Member;