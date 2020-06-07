import React from 'react';
import { InfoWrapper, Label, Content, EditButton } from './InfoIndicator.style';
import { EditFilled } from '@ant-design/icons';

const InfoIndicator = ({label, content, handleEdit, noEditBtn}) => {
    return <InfoWrapper>
        <Label>{label}</Label>
        <Content>{content}</Content>
        {noEditBtn ? null : <EditButton onClick={handleEdit} ><EditFilled /></EditButton>}
    </InfoWrapper>
}

export default InfoIndicator;