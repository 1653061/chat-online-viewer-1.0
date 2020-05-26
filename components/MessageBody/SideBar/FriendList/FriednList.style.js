import styled from 'styled-components';

export const FriendListWrapper = styled.div`
    height: 92%;
    overflow: auto;
`

export const FriendCard = styled.div`
    background-color: ${props => props.active ? 'rgba(0, 0, 0, .07)' : null};
    width: 95%;
    margin: 5px auto;
    padding: 10px 10px;
    border: none;
    border-radius: 12px;

    .name {
        font-weight: bold;
    }
`

export const NewMessageCard = styled.div`
    background-color: rgba(0, 0, 0, .07);
    width: 95%;
    margin: 5px auto;
    padding: 10px 10px;
    border: none;
    border-radius: 12px;
    display: flex;

    .content {
        flex: 10;
        padding: auto 10px;
    }

    .buttonarea {
        flex: 1;
    }

    .discard {
        margin: auto auto;
        padding: auto auto;
        font-size: 0.7rem;
        border-radius: 50%;
        border: none;
        background-color: white;
    }
`