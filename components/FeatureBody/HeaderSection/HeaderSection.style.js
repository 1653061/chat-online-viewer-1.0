import styled from 'styled-components';
import { device } from 'constants/device';

export const Container = styled.div`
    height: 400px;
    width: inherit;
    background-color: white;
    display: flex;
    flex-direction: row;
`
export const ImageSection = styled.img`
    flex: 1;
    width: 30%;
    height: auto;
    margin: 3%;

`
export const DesSection = styled.p` 
    font-size: 30px;
    color: #0084FF;
    flex: 3;
    align-self: center;
    padding: 50px
`