import React from 'react';
import { Wrapper, Container, Title } from './Tech.style';
import TechCard from './TechCard';

const Tech = ({}) => {
    return <Wrapper>
    <Title>Tech we use</Title>
    <Container>
        <TechCard 
            logoSrc="/nest.png" 
            techName="NestJS" 
            home="https://nestjs.com/" 
            github="https://github.com/nestjs/nest" 
        />
        <TechCard 
            logoSrc="/relay.png" 
            techName="Relay" 
            home="https://relay.dev/" 
            github="https://github.com/facebook/relay" 
        />
        <TechCard 
            logoSrc="/next.png" 
            techName="NextJS" 
            home="https://nextjs.org/" 
            github="https://github.com/vercel/next.js" 
        />
        <TechCard 
            logoSrc="/antd.jpg" 
            techName="Ant Design" 
            home="https://ant.design/" 
            github="https://github.com/ant-design/ant-design/"
        />
    </Container>
    </Wrapper>
}

export default Tech;