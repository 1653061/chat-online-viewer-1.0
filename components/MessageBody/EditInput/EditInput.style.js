import styled from 'styled-components';
import { device } from 'constants/device';

export const Label = styled.label`
    font-weight: bold;
    display: flex;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: block;
    border: none;
    background-color: rgba(0, 0, 0, .04);
    font-size: 1.1rem;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-style: italic;
    }
    :-ms-input-placeholder {
        font-style: italic;
    }
`

export const Error = styled.div`
    color: red;
`