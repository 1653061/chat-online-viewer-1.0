import React from 'react';
import { Wrapper } from './About.style';
import Info from './Info';
import Team from './Team';
import Tech from './Tech';


const About = ({}) => {
    return <Wrapper>
        <Info/>
        <Team/>
        <Tech/>
    </Wrapper>
}

export default About;