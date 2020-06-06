import styled from 'styled-components';
import { device } from 'constants/device';

export const HeaderWrapper = styled.div`
    overflow: hidden;

    .logo {
        font-size: 1.7rem;
        font-weight: bold;
        color: #0084FF;
        background-color: transparent;

        &:hover {
            color: #0084FF;
            text-decoration: none;
        }
    }

    .active {
        color: #0084FF;
    }

    @media ${device.laptop} {
        width: 100%;
        top: 0;
        position: fixed;
        background-color: white;
        opacity: .97; 
    }
`

export const LinkHandler = styled.a`
    float: none;
    display: block;
    font-size: 1.3rem;
    margin: 5px 20px;
    text-decoration: none;
    color: rgba(0, 0, 0, .6);
    background-color: #FAFAFA;
    padding: 20px 20px;
    border-radius: 10px;

    &:hover {
        color: black;
        text-decoration: underline;
    }

    @media ${device.laptop} {
        float: left;
        background-color: transparent;
        border-radius: 0px;
    }
`

export const HeaderRight = styled.div`
    float: none;

    @media ${device.laptop} {
        float: right;
    }
`