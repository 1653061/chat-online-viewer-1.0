import React from 'react';
import { Container } from './HPBody.style';
import FormContent from './FormContent';
import Banner from './Banner';
import { notification, message } from 'antd';
import FeatureSection from './FeatureSection';
import Footer from 'components/Footer';

const enableNoti = () => {
    notification.success({
        message: 'Sign Up Succcessfully',
        description: 'Check your mail to verify account',
    })
}

const enableMessage = () => {
    message.loading('Action in progress', 1);
}

const HPBody = ({}) => {
    return <><Container>
        <FormContent enableNoti={enableNoti} enableMessage={enableMessage} />
        <Banner />
    </Container>
    <FeatureSection />
    </>
}

export default HPBody;