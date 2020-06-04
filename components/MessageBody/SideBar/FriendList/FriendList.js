import React, { useState, useEffect, useContext } from 'react';
import { List } from 'antd';
import { createPaginationContainer } from 'react-relay';
import { GetAllRoomFragment, GetAllRoomPaging } from 'relay/graphql/RoomGraph';
import MainContext from 'constants/MainContext';
import { FriendCard, FriendListWrapper, NewMessageCard } from './FriendList.style';
import InfiniteScroll from 'react-infinite-scroller';

const FriendList = ({newMessage, discardNewMessage, rooms, relay, getActiveRoom}) => {
    const { currentUser } = useContext(MainContext);
    const [userDatas, setUserDatas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        if (rooms?.allRooms?.edges?.length && currentUser) {
            const userDataList = rooms.allRooms.edges.map((edge) => {
                const { users, _id, lastMessage } = edge.node;
                const userFilters = users.filter((user) => user._id !== currentUser._id);
                return ({
                    roomId: _id,
                    name: userFilters[0].name,
                    lastMessage,
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
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={() => {console.log('Hello')}}
            hasMore={false}
            useWindow={false}
        >
            <List 
                dataSource={userDatas}
                split={false}
                renderItem={
                    item => (
                        <FriendCard onClick={() => getActiveRoom(item.roomId, item.name)} active={item.active}>
                            <section className="avatarsection">
                                <img src="/avatar.png" className="avatar" />
                            </section>
                            <section className="info">
                                <div className="name">{item.name}</div>
                                <div>{item.lastMessage}</div>
                            </section>
                        </FriendCard>
                    )
                }
            />
        </InfiniteScroll>
        
    </FriendListWrapper>
}

export default createPaginationContainer(FriendList, { rooms: GetAllRoomFragment}, {
    direction: 'forward',
    getConnectionFromProps(props) {
        return props.rooms && props.rooms.allRooms;
    },
    getFragmentVariables(prevVars, totalCount) {
        return {
            ...prevVars,
            count: totalCount,
        };
    },
    getVariables(props, {count, cursor}, fragmentVariables) {
        return {
            count,
            cursor,
        };
    },
    query: GetAllRoomPaging,
});