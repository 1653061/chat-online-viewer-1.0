import styled from 'styled-components';
import { device } from 'constants/device';

export const ButtonWrapper = styled.button`
    background-color: ${props => props.option === "Success" && '#28A745;'
        || props.option === "Primary" && '#007BFF;'
        || props.option === "Danger" && '#DC3545;'
    }
    width: 100%;
    color: white;
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 25px;
    cursor: pointer;

    @media ${device.laptop} {
        padding: 10px 20px;
        width: auto;
    }
`

export const ButtonContent = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
`



