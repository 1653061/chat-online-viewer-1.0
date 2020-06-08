import styled from 'styled-components';

export const ChatComposerWrapper = styled.div`
    height: 7%;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 10px;
`

export const ChatComposerSection = styled.div`
    display: flex;
    flex-direction: row;
`

export const ButtonArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SendButton = styled.button`
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: transparent;
`

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin: auto;
`