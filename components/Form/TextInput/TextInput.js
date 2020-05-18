import React from 'react';
import { useField } from 'formik';
import { Label, Input, Error} from './TextInput.style';

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Label htmlFor={props.id || props.name}>{label}</Label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Error>{meta.error}</Error>) : null}
        </>
    )
}

export default TextInput;