import styled from 'styled-components';

export const ChatAreaWrapper = styled.div`
    height: 85%;
    overflow: auto;

    .Spinning {
        text-align: center;
    }
`

export const NoMessage = styled.div`
    width: 100%;
    height: 100%;
    display: table;
    text-align: center;

    .content {
        display: table-cell;
        vertical-align: middle;
        font-size: 2rem;
        color: #007BFF;
    }
`