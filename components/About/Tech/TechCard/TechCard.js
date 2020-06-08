import React from 'react';
import { Wrapper, TechLogo, TechName, Logo, LogoLink, LogoSection } from './TechCard.style';

const TechCard = ({logoSrc, techName, home, github}) => {
    return <Wrapper>
        <TechLogo src={logoSrc} />
        <TechName>{techName}</TechName>
        <LogoSection>
            <LogoLink href={home} target="_blank" ><Logo src="/home.png" /></LogoLink>
            <LogoLink href={github} target="_blank" ><Logo src="/github.png" /></LogoLink>
        </LogoSection>
    </Wrapper>
}

export default TechCard;