import React, { useState, useRef, useEffect, useContext } from 'react';
import { ChatAreaWrapper, NoMessage } from './ChatArea.style';
import { createPaginationContainer, requestSubscription } from 'react-relay';
import { GetAllMessageFragment, GetAllMessagePaging, SubscriptionNewMessage } from 'relay/graphql/RoomGraph';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import MainContext from 'constants/MainContext';
import { List, Spin, message } from 'antd';
import environment from 'relay/RelayEnvironment';
import Message  from './Message';
import InfiniteScroll from 'react-infinite-scroller';
import moment from 'moment';

const ChatArea = ({ activeRoom, messages = [], relay }) => {
    const { currentUser } = useContext(MainContext);
    const [messagesData, setMessagesData] = useState([]);
    const messagesEndRef = useRef();
    const listRef = useRef();
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

    useEffect(() => {
        if (messages?.allChat?.edges?.length && currentUser) {
            let tmp = parseInt(messages.allChat.edges[0].node.createdAt);
            const messagesDataList = messages.allChat.edges.map((edge) => {
                const { createdAt, ownerId, message } = edge.node;
                let showTimestamp = false;
                const tmpDate = new Date(parseInt(tmp));
                const timestamp = new Date(parseInt(createdAt));
                if (moment(timestamp).diff(tmpDate, "hours") >= 1) {
                    showTimestamp = true
                }
                tmp = parseInt(createdAt);
                return ({
                    data: {
                        timestamp,
                        message,
                    },
                    isMine: currentUser._id === ownerId,
                    showTimestamp,
                })
            })
            setMessagesData(messagesDataList);
        }
    }, [currentUser, messages])

    useEffect(() => {
        if (activeRoom) {
            const subcriptionIns = requestSubscription(environment(), {
                subscription: SubscriptionNewMessage,
                variables: {
                    roomId: activeRoom,
                },
                onCompleted: ({ chatAdded }, errors) => {
                    if (errors) {
                        console.log(errors);
                    }
                },
                updater: proxyStore => {
                    const createConnection = proxyStore.getRootField('chatAdded').getLinkedRecord('node');
                    const root = proxyStore.get(ROOT_ID);
                    const chatAllQueryStore = root.getLinkedRecord(`RoomGraphGetAllMessage(roomId:"${activeRoom}")`);
                    const connection = ConnectionHandler.getConnection(chatAllQueryStore, "GetAllRoomChatList_allChat", []);
                    if (connection) {
                        const edge = ConnectionHandler.createEdge(
                            proxyStore,
                            connection,
                            createConnection,
                            'ChatEdge',
                        );
                        setShouldScrollToBottom(true);
                        ConnectionHandler.insertEdgeAfter(connection, edge)
                    }
                },
            })

            return () => {
                subcriptionIns.dispose();
            }
        }
    }, [activeRoom])

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }

    useEffect(() => {
        listRef.current.onscroll = () => {
            if (listRef.current.scrollTop === 0) {
                if (relay.hasMore()) {
                    setLoading(true);
                    setShouldScrollToBottom(false);
                    listRef.current.scrollTop = 5;
                    relay.loadMore(10, error => console.log(error));
                }
            }
        }
    }, []);

    useEffect(() => {
        if (loading) setLoading(false)
    }, [messagesData]);

    const lastMessage = () => {
        scrollToBottom();
    }

    return <ChatAreaWrapper ref={listRef}>
        {messagesData.length === 0 && <NoMessage><div className="content">Type something to begin chat</div></NoMessage>}
        {loading && <div className="Spinning"><Spin /></div>}
        {
            messagesData && messagesData.length > 0 &&
                    <List 
                        dataSource={messagesData}
                        split={false}
                        renderItem={
                            (item, index) => {
                                if (index === messagesData.length - 1 && shouldScrollToBottom) {
                                    return <Message mydata={item} lastMessage={lastMessage} />
                                }
                                return <Message mydata={item} />
                            }
                        }
                    />
        }
        <div ref={messagesEndRef} />
    </ChatAreaWrapper>
}

export default createPaginationContainer(ChatArea, { messages: GetAllMessageFragment}, {
    direction: 'backward',
    getConnectionFromProps(props) {
        return props.messages && props.messages.allChat;
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
            roomId: props.activeRoom,
        };
    },
    query: GetAllMessagePaging,
});