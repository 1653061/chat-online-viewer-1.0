import React from 'react';
import { List } from 'antd';
import { FriendCard, FriendListWrapper, NewMessageCard } from './FriednList.style';

const FriendList = ({newMessage, discardNewMessage}) => {
    const data = [
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Nhut',
            active: true
        },
        {
            name: 'Bach',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khai',
            active: false
        },
        {
            name: 'Khoa',
            active: false
        },
    ];

    return <FriendListWrapper>
        {newMessage ? <NewMessageCard>
            <div className="content">New message</div>
            <div className="buttonarea">
                <button className="discard" onClick={discardNewMessage}>x</button>
            </div>
        </NewMessageCard> : null}
        <List 
            dataSource={data}
            split={false}
            renderItem={
                item => (
                    <FriendCard onClick="" active={item.active}>
                        <div className="name">{item.name}</div>
                        <div>Alo Alo</div>
                    </FriendCard>
                )
            }
        />
    </FriendListWrapper>
}

export default FriendList;