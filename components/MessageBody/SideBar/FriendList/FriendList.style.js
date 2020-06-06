import styled from 'styled-components';

export const FriendListWrapper = styled.div`
    height: 92%;
    overflow: auto;
    min-width: 300px;
`

export const FriendCard = styled.div`
    background-color: ${props => props.active ? 'rgba(0, 0, 0, .07)' : null};
    width: 95%;
    margin: 5px auto;
    padding: 10px 10px;
    border: none;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`

export const Content = styled.div`
    flex: 10;
    padding: auto 10px;
    margin: auto 0;
`

export const ButtonArea = styled.div`
    flex: 1;
    margin: auto 0;
`

export const DiscardButton = styled.button`
    margin: auto auto;
    padding: auto auto;
    font-size: 0.7rem;
    border-radius: 50%;
    border: none;
    background-color: white;

    &:hover {
        background-color: red;
        color: white;
    }
`

export const Spinning = styled.div`
    text-align: middle;
`

export const LastMessage = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
`

export const AvatarSection = styled.div`
    flex: 1;
`

export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px 10px;
    background-color: white;
`

export const Info = styled.div`
    flex: 3;
    display: ${props => props.newMessage ? 'flex' : ''};
    flex-direction: ${props => props.newMessage ? 'row' : ''};
`

export const Name = styled.div`
    font-weight: bold;
`
