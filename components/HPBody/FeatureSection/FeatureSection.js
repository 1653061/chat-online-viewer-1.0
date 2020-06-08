import React from 'react';
import { Wrapper } from './FeatureSection.style';
import FeatureCard from './FeatureCard';

const FeatureSection = ({}) => {
    return <Wrapper>
        <FeatureCard srcImage="/keep-in-touch.png" heading="Keep In Touch" detail="Keep in touch with another" />
        <FeatureCard srcImage="/graphic.jpg" heading="Creative" detail="Be all you can be" />
        <FeatureCard srcImage="/happy.jpg" heading="Friendly UI" detail="Easy to use" />
        <FeatureCard srcImage="/videocall.jpg" heading="Stay Connected" detail="It's everywhere you want to be" />
    </Wrapper>
}

export default FeatureSection;