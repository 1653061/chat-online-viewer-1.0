import styled from 'styled-components';

export const ChatTitleWrapper = styled.div`
    height: 8%;
    border-bottom: 1px solid rgba(0, 0, 0, .10);

    .logo {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 10px 10px;
        background-color: white;
        float: left;
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

    .nametitle {
        font-size: 1.2rem;
        float: left;
        height: 100%;
        background-color: transparent;

        div {
            font-weight: bold;
            padding-top: 16px;
            background-color: transparent;
        }
    }

    .rightedge {
        margin-right: 20px;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin: auto;
    }
`