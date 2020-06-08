import React from 'react';
import { Container, Wrapper, Title } from './Team.style';
import Member from './Member'

const Team = ({}) => {
    return <Wrapper>
        <Title>People behind Chat Application</Title>
        <Container>
            <Member src="/avatar1.jpg" text="Tùng Bách" desp="1653004" fblink="https://www.facebook.com/lehoang.bach.79" />
            <Member src="/avatar2.jpg" text="Minh Nhựt" desp="1653061" fblink="https://www.facebook.com/simayi001" />
            <Member src="/avatar3.jpg" text="Quang Khải" desp="1653033" fblink="https://www.facebook.com/damquangkhai" />
        </Container>
    </Wrapper>
}

export default Team;