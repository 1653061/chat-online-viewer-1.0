import React from 'react';
import { ItemWrapper, ImageFeature, DesFeature } from './Item.style'

const Item = ({src}) => {
    return <ItemWrapper>
        <ImageFeature src={src} alt="FeatureImage" />
        <DesFeature> Description </DesFeature>
    </ItemWrapper>
}

export default Item;
