import styled from 'styled-components';
import { device } from 'constants/device';

export const ProfileWrapper = styled.div`
    postion: fixed;
    border-bottom: 1px solid rgba(0, 0, 0, .10);

    .logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 10px 20px;
        background-color: white;
    }

    .btn {
        margin: 10px 5px;
        float: right;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background-color: rgba(0, 0, 0, .04);
        outline: none;
    }

    .icon {
        display: block;
        width: 20px;
        height: 20px;
        margin: auto;
    }

    @media ${device.laptop} {
        .btn {
            float: right;
        }
    }
`