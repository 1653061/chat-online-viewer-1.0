import styled from 'styled-components';
import { device } from 'constants/device';

export const Container = styled.div`
    width: 100%;

    @media ${device.laptop} {
        flex: 1.5;
    }
`

export const BannerImage = styled.img`
    width: 100%;
    height: 100%;
`