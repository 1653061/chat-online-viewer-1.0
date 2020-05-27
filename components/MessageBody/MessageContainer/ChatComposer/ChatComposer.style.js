import styled from 'styled-components';

export const ChatComposerWrapper = styled.div`
    height: 7%;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-top: 10px;

    .chatcomposer {
        display: flex;
        flex-direction: row;

        .send {
            border-radius: 50%;
            border: none;
            outline: none;
            background-color: transparent;
        }

        .buttonarea {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .icon {
            width: 20px;
            height: 20px;
            margin: auto;
        }
    }
`