import React from 'react';
import { ItemWrapper, ImageFeature, DesFeature, Title, Description } from './Item.style'

const Item = ({src}) => {
    return <ItemWrapper>
        <ImageFeature src={src} alt="FeatureImage" />
        <DesFeature>
            <Title>
                Stay connected
            </Title>
            <Description>
                Keep in touch with your friends anytime, anywhere
            </Description>
        </DesFeature>
    </ItemWrapper>
}

export default Item;
