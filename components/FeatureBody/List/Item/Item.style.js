import styled from 'styled-components';
import { device } from 'constants/device'

export const ItemWrapper = styled.div`
    display: flex; 
    background-color: rgba(0, 0, 0, .04);
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
    padding: 20px 20px; 
` 

export const ImageFeature = styled.img`
    width: 700px;
    height: 400px;
`

export const DesFeature = styled.div` 
    margin: auto 20px;
`

export const Title = styled.p`
    font-size: 2rem;
`

export const Description = styled.p`
    font-size: 1.5rem;
`