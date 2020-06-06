import React from 'react';
import { Container } from './List.style';
import Item from 'components/FeatureBody/List/Item'

const List = ({}) => {
    return <Container>
        <Item src="/feature1.png"/>
        <Item src="/feature2.png"/>
        <Item src="/feature3.png"/>
    </Container>
}

export default List;