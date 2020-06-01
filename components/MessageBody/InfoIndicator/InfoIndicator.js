import React from 'react';
import { InfoWrapper } from './InfoIndicator.style';

const InfoIndicator = ({label, content}) => {
    return <InfoWrapper>
        <div className="label">{label}</div>
        <div className="content">{content}</div>
    </InfoWrapper>
}

export default InfoIndicator;