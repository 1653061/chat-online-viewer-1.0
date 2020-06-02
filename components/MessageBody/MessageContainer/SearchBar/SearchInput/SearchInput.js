import React from 'react';
import { useField } from 'formik';
import { Input, Error } from './SearchInput.style';

const SearchInput = ({...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (<Error>{meta.error}</Error>) : null}
        </>
    )
}

export default SearchInput;