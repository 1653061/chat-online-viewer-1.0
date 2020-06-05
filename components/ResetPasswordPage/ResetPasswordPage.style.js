import styled from 'styled-components';
import { device } from 'constants/device';

export const RPPageWrapper = styled.div`
    width: 100%;
    height: 100%;
;`

export const FormCard = styled.div`
    text-align: center;
    width: 100%;
    margin: 40% 20px;
    padding: 20px 20px;
    border-radius: 15px;
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media ${device.laptop} {
        width: 30%;
        margin: 100px auto;
    }
`