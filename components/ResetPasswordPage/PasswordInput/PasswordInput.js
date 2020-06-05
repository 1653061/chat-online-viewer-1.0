import React from 'react';
import { Input, Label, Error } from './PasswordInput.style';
import { useField } from 'formik';

const PasswordInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Error>{meta.error}</Error>) : null }
        </>
    )
};

export default PasswordInput;