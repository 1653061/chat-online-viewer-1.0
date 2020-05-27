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
    display: flex;
    flex-direction: row;

    .name {
        font-weight: bold;
    }

    .avatarsection {
        flex: 1;
    }

    .info {
        flex: 3;
        display: ${props => props.newMessage ? 'flex' : ''};
        flex-direction: ${props => props.newMessage ? 'row' : ''};
    }

    .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin: 10px 10px;
        background-color: white;
    }

    .content {
        flex: 10;
        padding: auto 10px;
        margin: auto 0;
    }

    .buttonarea {
        flex: 1;
        margin: auto 0;
    }

    .discard {
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
    }
`
