import React, { useState, useEffect, useContext } from 'react';
import { List } from 'antd';
import { createPaginationContainer, requestSubscription } from 'react-relay';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import { GetAllRoomFragment, GetAllRoomPaging, SubscriptionNewRoom, SubscriptionLastMessage } from 'relay/graphql/RoomGraph';
import MainContext from 'constants/MainContext';
import environment from 'relay/RelayEnvironment';
import { 
    FriendCard, 
    FriendListWrapper, 
    NewMessageCard, 
    Spinning, 
    LastMessage, 
    AvatarSection,
    Avatar,
    Info,
    Name,
    Content,
    DiscardButton,
    ButtonArea
} from './FriendList.style';
import InfiniteScroll from 'react-infinite-scroller';

const FriendList = ({newMessage, discardNewMessage, rooms, relay, getActiveRoom, isAddNew}) => {
    const { currentUser } = useContext(MainContext);
    const [userDatas, setUserDatas] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (rooms?.allRooms?.edges?.length && currentUser) {
            const userDataList = rooms.allRooms.edges.map((edge, index) => {
                const { users, _id, lastMessage } = edge.node;
                const userFilters = users.filter((user) => user._id !== currentUser._id);
                return ({
                    index,
                    roomId: _id,
                    name: userFilters[0].name,
                    lastMessage,
                    active: false,
                })
            })
            setUserDatas(userDataList);
        }
    }, [currentUser, rooms])
    
    useEffect(() => {
        if (currentUser) {
            const subcriptionIns = requestSubscription(environment(), {
                subscription: SubscriptionNewRoom,
                variables: {
                    clientId: currentUser._id,
                },
                updater: proxyStore => {
                    const createConnection = proxyStore.getRootField('roomAdded').getLinkedRecord('node');
                    const root = proxyStore.get(ROOT_ID);
                    const roomAllQueryStore = root.getLinkedRecord("RoomGraphGetAllRoom");
                    const connection = ConnectionHandler.getConnection(roomAllQueryStore, "GetAllRoomChatList_allRooms", []);
                    if (connection) {
                        const edge = ConnectionHandler.createEdge(
                            proxyStore,
                            connection,
                            createConnection,
                            'RoomEdge',
                        );
                        ConnectionHandler.insertEdgeBefore(connection, edge)
                    }
                },
            })

            const subcriptionInsLastMessage = requestSubscription(environment(), {
                subscription: SubscriptionLastMessage,
                variables: {
                    clientId: currentUser._id,
                },
                updater: proxyStore => {
                    const updateLastMessage = proxyStore.getRootField('updateLastMessage');
                    const lastMessage = updateLastMessage.getValue("lastMessage");
                    const roomId = updateLastMessage.getValue("roomId");
                    const root = proxyStore.get(ROOT_ID);
                    const roomAllQueryStore = root.getLinkedRecord("RoomGraphGetAllRoom");
                    const connection = ConnectionHandler.getConnection(roomAllQueryStore, "GetAllRoomChatList_allRooms", []);
                    connection.getLinkedRecords("edges").forEach((edge) => {
                        const cur = edge.getLinkedRecord("node");
                        const curId = cur.getValue("_id");
                        if (curId === roomId) {
                            cur.setValue(lastMessage, "lastMessage");
                            edge.setLinkedRecord(cur, "node");
                        }
                    });
                },
            })

            return () => {
                subcriptionIns.dispose();
                subcriptionInsLastMessage.dispose();
            }
        }
    }, [currentUser])

    const handleClickFriendCard = (item) => {
        const newUserDatas = userDatas.map(user => {
            if (user.active === true) {
                user.active = false;
            }
            if (user.index === item.index) {
                user.active = true;
            }
            return user;
        });
        setUserDatas(newUserDatas);
        getActiveRoom(item.roomId, item.name);
    }

    useEffect(() => {
        if (isAddNew) {
            const editUser = {
                ...userDatas[0],
                active: true
            }
            const newUserDatas = [editUser, ...userDatas.slice(1)];
            setUserDatas(newUserDatas);
            getActiveRoom(userDatas[0].roomId, userDatas[0].name);
        }
    }, [isAddNew])

    useEffect(
        () => {
            if (newMessage) {
                const newUserDatas = userDatas.map(user => {
                    if (user.active === true) user.active = false;
                    return user;
                });
                setUserDatas(newUserDatas);
            }
        }, [newMessage]
    )

    useEffect(() => {
        if (loading) setLoading(false);
    }, [userDatas]);

    const loadMore = () => {
        if (relay.hasMore()) {
            relay.loadMore(10, error => console.log(error));
        }
    }

    return <FriendListWrapper>
        {newMessage ? <FriendCard newMessage active={true}>
            <AvatarSection>
                <Avatar src="/avatar.png" />
            </AvatarSection>
            <Info newMessage>
                <Content>New message</Content>
                <ButtonArea>
                    <DiscardButton onClick={discardNewMessage}>x</DiscardButton>
                </ButtonArea>
            </Info>
        </FriendCard> : null}
        <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={loadMore}
            hasMore={relay.hasMore()}
            useWindow={false}
        >
            <List 
                dataSource={userDatas}
                split={false}
                renderItem={
                    item => (
                        <FriendCard onClick={() => handleClickFriendCard(item)} active={item.active}>
                            <AvatarSection>
                                <Avatar src="/avatar.png" />
                            </AvatarSection>
                            <Info>
                                <Name>{item.name}</Name>
                                <LastMessage>{item.lastMessage}</LastMessage>
                            </Info>
                        </FriendCard>
                    )
                }
            />
            {loading && <Spinning><Spin /></Spinning>}
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