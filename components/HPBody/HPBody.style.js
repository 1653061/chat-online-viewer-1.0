import styled from 'styled-components';
import { device } from '../../constants/device';

export const Container = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        margin-top: 100px;
        flex-direction: row;
    }
`