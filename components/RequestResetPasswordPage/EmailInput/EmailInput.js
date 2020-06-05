import React from 'react';
import { Input, Label, Error } from './EmailInput.style';
import { useField } from 'formik';

const EmailInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Error>{meta.error}</Error>) : null}
        </>
    )
};

export default EmailInput;