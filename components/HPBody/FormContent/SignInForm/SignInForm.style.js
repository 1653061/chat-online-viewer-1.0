import styled from 'styled-components';
import { device } from 'constants/device';

export const Container = styled.div`

`
export const SignInWithGoogle = styled.button`
    width: 100%;
    color: rgba(0, 0, 0, .5);
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    background-color: white;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:disabled {
        cursor: not-allowed;
    }

    @media ${device.laptop} {
        width: 70%;
    }

    .icon {
        width: 20px;
        height: 20px;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
    }
`

export const SignInWithFacebook = styled.button`
    width: 100%;
    color: white;
    padding: 10px;
    margin: 8px 0;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    background-color: #5B7BD5;
    font-weight: bold;
    font-size: 1.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    &:disabled {
        cursor: not-allowed;
    }

    @media ${device.laptop} {
        width: 70%;
    }

    .icon {
        width: 20px;
        height: 20px;
        float: left;
        margin-left: 10px;
        margin-top: 5px;
    }
`

export const Noti = styled.div`
    background-color: rgba(255,0,0, .3);
    width: 100%;
    color: rgb(255,0,0);
    border: 1px solid rgb(255,0,0);
    border-radius: 15px;
    text-align: center;
    vertical-align: middle;
    margin-bottom: 5px;

    @media ${device.laptop} {
        width: 70%;
    }
`

export const Content = styled.p`
    padding-top: 7px;
`

export const LinkHandler = styled.a`

`

export const Img = styled.img`

`