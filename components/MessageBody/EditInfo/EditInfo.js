import React from 'react';
import { Formik, Form } from 'formik';
import EditInput from '../EditInput';
import Button from 'components/Button';
import * as Yup from 'yup';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { ButtonSection, ButtonGroup } from './EditInfo.style';

const EditInfo = ({handleDiscardChange}) => {
    return <Formik
        initialValues={{
            username: '',
            phone: ''
        }}
        validationSchema={Yup.object({
            username: Yup.string()
                .required('Required'),
            phone: Yup.string()
                .required('Required')
                .min(8, 'At least 8 characters')
        })}
        onSubmit={() => console.log('Alo')}
        onReset={() => {
            Modal.confirm({
                title: 'Confirm',
                icon: <ExclamationCircleOutlined />,
                content: 'Are you sure?',
                okText: 'Confirm',
                cancelText: 'Cancel',
                onOk: () => {
                    handleDiscardChange()
                },
            })
        }}
    >   
        <Form>
            <EditInput 
                label="Username"
                name="username"
                type="text"
                placeholder="Username"
            />
            <EditInput
                label="Phone"
                name="phone"
                type="text"
                placeholder="Phone"
            />
            <ButtonGroup>
                <ButtonSection>
                    <Button option="Danger" type="reset">
                        Discard Change
                    </Button>
                </ButtonSection>
                <ButtonSection>
                    <Button option='Success' type="submit">
                        Save Change
                    </Button>
                </ButtonSection>
            </ButtonGroup>
        </Form>
    </Formik>
}

export default EditInfo;