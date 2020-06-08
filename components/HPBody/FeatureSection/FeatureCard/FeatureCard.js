import React from 'react';
import { CardWrapper, Image, Heading, Detail } from './FeatureCard.style';

const FeatureCard = ({srcImage, heading, detail}) => {
    return <CardWrapper>
        <Image src={srcImage} />
        <Heading>{heading}</Heading>
        <Detail>{detail}</Detail>
    </CardWrapper>
}

export default FeatureCard;