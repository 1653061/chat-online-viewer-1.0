
import styled from 'styled-components';

export const MessageWrapper = styled.div`
    margin: 10px 20px;

    .message {
        display: flex;
        flex-direction: column;
    }
    
    .message .timestamp {
        display: flex;
        justify-content: center;
        color: #999;
        font-weight: 600;
        font-size: 12px;
        margin: 10px 0px;
        text-transform: uppercase;
    }
    
    .message .bubble-container {
        font-size: 14px;
        display: flex;
    }
    
    .message.mine .bubble-container {
        justify-content: flex-end;
    }
    
    
    .message .bubble-container .bubble {
        margin: 1px 0px;
        background: #f4f4f8;
        padding: 10px 15px;
        border-radius: 20px;
        max-width: 75%;
        border-radius: 20px;
    }
    
    .message.mine .bubble-container .bubble {
        background: #007aff;
        color: white;
        border-radius: 20px;
    }
`

