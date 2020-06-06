import React from 'react';
import { ItemWrapper, ImageFeature, DesFeature } from './Item.style'

const Item = ({}) => {
    return <ItemWrapper>
        <ImageFeature src="/feature1.png" alt="FeatureImage" />
        <DesFeature> Description </DesFeature>
    </ItemWrapper>
}

export default Item;
