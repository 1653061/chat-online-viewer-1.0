import styled from 'styled-components';
import { device } from 'constants/device';

export const Wrapper = styled.div`
    text-align: center;  

    @media ${device.laptop} {
        text-align: left;
    }
`

export const Title = styled.p`
    font-style: italic;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 40px;
    margin-top: 20px;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`
