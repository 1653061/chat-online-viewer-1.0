import styled from 'styled-components';

export const InfoWrapper = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, .10);
    width: 100%;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    padding: 20px;

    .label {
        width: 30%;
        color: rgba(0, 0, 0, .4);
        flex: 1;
    }

    .content {
        width: 70%;
        flex: 3;
    }
`