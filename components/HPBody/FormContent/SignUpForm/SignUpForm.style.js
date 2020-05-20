import styled from 'styled-components';
import { device } from 'constants/device';

export const Container = styled.div`
    .noti {
        background-color: rgba(255,0,0, .3);
        width: 100%;
        height: 40px;
        color: rgb(255,0,0);
        border: 1px solid rgb(255,0,0);
        border-radius: 15px;
        text-align: center;
        vertical-align: middle;
        margin-bottom: 5px;

        @media ${device.laptop} {
            width: 70%;
        }
    }

    .content {
        padding-top: 7px;
    }
`