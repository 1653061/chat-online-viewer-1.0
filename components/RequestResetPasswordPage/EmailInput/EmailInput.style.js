import styled from 'styled-components';

export const Label = styled.label`
    font-weight: bold;
    font-size: 1.1rem;
`

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
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
    color: red;
    font-weight: bold;
`