import React from 'react';
import { InfoWrapper } from './InfoIndicator.style';

const InfoIndicator = ({label, content, lastItem}) => {
    return <InfoWrapper lastItem={lastItem}>
        <div className="label">{label}</div>
        <div className="content">{content}</div>
    </InfoWrapper>
}

export default InfoIndicator;