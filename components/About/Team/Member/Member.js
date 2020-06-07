import React from 'react';
import { Container, Avatar, Info } from './Member.style'

const Member = ({src, text, desp}) => {
    return <Container>
        <Avatar src={src} alt="Avatar Image"/>
        <Info className="Name">{text}</Info>
        <Info className="Desp">{desp}</Info>
    </Container>
}

export default Member;