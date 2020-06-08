import styled from 'styled-components';
import { device } from 'constants/device';

export const Wrapper = styled.div`
    background-color: rgba(0, 0, 0, .04);
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    @media ${device.laptop} {
        flex-direction: row;
    }
`