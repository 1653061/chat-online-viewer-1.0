import styled from 'styled-components';

export const MBWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0; 
`
export const Title = styled.div`
    color: blue;
    font-size: 1.2rem;
`

export const LogOut = styled.button`
    border: none;
    width: 100%;
    cursor: pointer;
    color: red;
    margin: 10px 0;
    background-color: transparent;
    font-size: 1.1rem;
`