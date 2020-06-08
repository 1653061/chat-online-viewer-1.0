
import styled from 'styled-components';

export const MessageWrapper = styled.div`
    margin: 10px 20px;
`

export const MessageSection = styled.div`
    display: flex;
    flex-direction: column;
    word-wrap: break-word;
`

export const TimeStamp = styled.div`
    display: flex;
    justify-content: center;
    color: #999;
    font-weight: 600;
    font-size: 12px;
    margin: 10px 0px;
    text-transform: uppercase;
`

export const BubbleContainer = styled.div`
    font-size: 14px;
    display: flex;

    justify-content: ${props => props.isMine ? 'flex-end' : ''};
`

export const LinkHolder = styled.a`
    color: ${props => props.isMine ? 'white' : 'black'};
    text-decoration: underline;

    &:hover {
        color: ${props => props.isMine ? 'white' : 'black'};
        cursor: pointer;
        text-decoration: underline;
    }
`

export const Bubble = styled.div`
    margin: 1px 0px;
    background: ${props => props.isMine ? '#007aff' : '#f4f4f8'};
    padding: 10px 15px;
    border-radius: 20px;
    max-width: 75%;
    border-radius: 20px;
    max-width: 500px;
    color: ${props => props.isMine ? 'white' : ''};
`

