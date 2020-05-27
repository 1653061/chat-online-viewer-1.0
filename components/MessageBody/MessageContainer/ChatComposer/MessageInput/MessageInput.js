import React from 'react';
import { Input } from './MessageInput.style';
import { useField } from 'formik';

const MessageInput = ({...props}) => {
    const [field] = useField(props); 
    
    return <Input {...field} {...props} />
}

export default MessageInput;