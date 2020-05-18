import styled from 'styled-components';
import { device } from 'constants/device';

export const FormContentWrapper = styled.div`
    width: 100%;

    @media ${device.laptop} {
        flex: 1;
    }
`

export const TextWrapper = styled.div`
    width: 100%;
    font-size: 1.1rem;
    color: rgba(0, 0, 0, .7);
    text-align: center;
    margin: 10px 0;

    @media ${device.laptop} {
        width: auto;
        text-align: left;
    }

    a {
        font-size: 1.1rem;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
        width: 100%;
        
        &:focus {
            color: red;
        }

        &:hover {
            text-decoration: underline;
        }

        color: ${props => props.forgot ? 'rgba(0, 0, 0, .4)' : '#0084ff'};
    }
`
