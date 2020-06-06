import React from 'react';
import { Container, ImageSection, DesSection } from './HeaderSection.style';

const HeaderSection = ({}) => {
    return <Container>
        <DesSection>
            Feature
            These are all features of our project
        </DesSection>
        <ImageSection src="/feature0.png" alt="FeatureImage" />
    </Container>
}

export default HeaderSection;