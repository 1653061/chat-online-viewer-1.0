import styled from 'styled-components';
import { device } from 'constants/device';

export const ProfileWrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .10);
    height: 6%;
    display: flex;
    flex-direction: horizon;

    .rightedge {
        margin-right: 5px;
    }

    @media ${device.mobileL} {
        height: 12%;
        display: block;

        .rightedge {
            margin-right: 0;
        }
    }

    @media ${device.laptop} {
        height: 8%;
        display: block;

        .rightedge {
            margin-right: 0;
        }
    }
`

export const Btn = styled.button`
    flex: 1;
    margin-left: 5px;
    margin-top: 3px;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: none;
    background-color: rgba(0, 0, 0, .04);
    outline: none;

    @media ${device.mobileL} {
        float: right;
        width: 30px;
        height: 30px;
        margin: 10px 5px;
    }

    @media ${device.laptop} {
        margin: 10px 5px;
        float: right;
        width: 40px;
        height: 40px;
    }
`

export const Icon = styled.img`
    flex: 1;
    display: block;
    width: 15px;
    height: 15px;
    margin: auto;

    @media ${device.laptop} {
        width: 20px;
        height: 20px;
    }
`

export const Logo = styled.img`
    display: none;

    @media ${device.mobileL} {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 10px 10px;
        background-color: white;
    }

    @media ${device.laptop} {
        display: inline-block;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 10px 20px;
        background-color: white;
    }
`