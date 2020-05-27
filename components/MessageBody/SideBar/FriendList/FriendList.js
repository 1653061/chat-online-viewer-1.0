import React from 'react';
import { List } from 'antd';
import { FriendCard, FriendListWrapper, NewMessageCard } from './FriendList.style';

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
        {newMessage ? <FriendCard newMessage >
            <section className="avatarsection">
                <img src="/avatar.png" className="avatar" />
            </section>
            <section className="info">
                <div className="content">New message</div>
                <div className="buttonarea">
                    <button className="discard" onClick={discardNewMessage}>x</button>
                </div>
            </section>
        </FriendCard> : null}
        <List 
            dataSource={data}
            split={false}
            renderItem={
                item => (
                    <FriendCard onClick="" active={item.active}>
                        <section className="avatarsection">
                            <img src="/avatar.png" className="avatar" />
                        </section>
                        <section className="info">
                            <div className="name">{item.name}</div>
                            <div>Alo Alo</div>
                        </section>
                    </FriendCard>
                )
            }
        />
    </FriendListWrapper>
}

export default FriendList;