import React from 'react';
import { InfoWrapper, Label, Content } from './InfoIndicator.style';

const InfoIndicator = ({label, content}) => {
    return <InfoWrapper>
        <Label>{label}</Label>
        <Content>{content}</Content>
    </InfoWrapper>
}

export default InfoIndicator;