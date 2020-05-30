import React, { useState, useEffect, useContext } from 'react';
import { List } from 'antd';
import MainContext from 'constants/MainContext';
import { FriendCard, FriendListWrapper, NewMessageCard } from './FriendList.style';

const FriendList = ({newMessage, discardNewMessage, rooms}) => {
    const { currentUser } = useContext(MainContext);
    const [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        if (rooms?.edges?.length && currentUser) {
            const userDataList = rooms.edges.map((edge) => {
                const { users } = edge.node;
                const userFilters = users.filter((user) => user._id !== currentUser._id);
                return ({
                    name: userFilters[0].name,
                    active: true,
                })
            })
            setUserDatas(userDataList);
        }
    }, [currentUser, rooms])

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
            dataSource={userDatas}
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