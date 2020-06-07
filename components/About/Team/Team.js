import React from 'react';
import { Container } from './Team.style';
import Member from './Member'

const Team = ({}) => {
    return <Container>
        <Member src="/avatar1.jpg" text="Tùng Bách" desp="Tạ team"/>
        <Member src="/avatar2.jpg" text="Minh Nhựt" desp="Super leader"/>
        <Member src="/avatar3.jpg" text="Quang Khải" desp="Carry team"/>
    </Container>
}

export default Team;