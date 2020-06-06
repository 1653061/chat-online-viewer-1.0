import styled from 'styled-components';

export const MCWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const LoadingMessage = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: table;

    .tablecell {
        display: table-cell;
        width: inherit;
        height: inherit;
        vertical-align: middle;
    }
`

export const NoActiveRoom = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    display: table;

    .content {
        display: table-cell;
        vertical-align: middle;
        font-size: 2rem;
        color: #007BFF;
    }
`