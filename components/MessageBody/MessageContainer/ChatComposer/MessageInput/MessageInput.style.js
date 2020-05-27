import styled from 'styled-components';

export const Input = styled.input`
    flex: 12;
    padding: 8px 15px;
    display: block;
    border: none;
    border-radius: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, .04);
    font-size: 1rem;
    height: 100%;

    ::placeholder,
    ::-webkit-input-placeholder {
        font-style: italic;
    }
    :-ms-input-placeholder {
        font-style: italic;
    }

    &:focus {
        outline: none;
    }
`
