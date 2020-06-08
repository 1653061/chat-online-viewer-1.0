import styled from 'styled-components';
import { device } from 'constants/device';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    height: 50px;
    flex-direction: column;
    text-align: center;

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
`

export const Logo = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #0084FF;
    margin: 5px 0;

    @media ${device.laptop} {
        margin: 10px 30px;
    }
`

export const Content = styled.div`
    margin: 5px 0;
    font-weight: bold;
    font-style: italic;

    @media ${device.laptop} {
        margin: 15px 30px;
    }
`