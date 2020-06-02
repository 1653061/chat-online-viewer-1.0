import styled from 'styled-components';
import { device } from 'constants/device';

export const Input = styled.input`
    width: 90%;
    padding: 12px 20px;
    margin: 8px auto;
    display: block;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
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
    margin-left: 5%;
    color: red;
`