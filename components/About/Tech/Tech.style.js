import styled from 'styled-components';
import { device } from 'constants/device';


export const Wrapper = styled.div`
    text-align: center;
    background-color: rgba(0, 0, 0, 0.03);
    padding-top: 20px;

    @media ${device.laptop} {
        text-align: right;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    

    @media ${device.laptop} {
        flex-direction: row;
    }
`

export const Title = styled.p`
    font-style: italic;
    font-weight: bold;
    font-size: 1.5rem;
    margin-right: 40px;
    color: black;
`
