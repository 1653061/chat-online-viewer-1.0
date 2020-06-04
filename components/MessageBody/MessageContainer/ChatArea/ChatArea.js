import React, { useState, useRef, useEffect, useContext } from 'react';
import { ChatAreaWrapper } from './ChatArea.style';
import { createPaginationContainer, requestSubscription } from 'react-relay';
import { GetAllMessageFragment, GetAllMessagePaging, SubscriptionNewMessage } from 'relay/graphql/RoomGraph';
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';
import MainContext from 'constants/MainContext';
import { List, Spin } from 'antd';
import environment from 'relay/RelayEnvironment';
import Message  from './Message';
import InfiniteScroll from 'react-infinite-scroller';

const ChatArea = ({ activeRoom, messages = [], relay }) => {
    const { currentUser } = useContext(MainContext);
    const [messagesData, setMessagesData] = useState([]);
    const messagesEndRef = useRef();
    const listRef = useRef();
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [outOfData, setOutOfData] = useState(false);
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(true);

    useEffect(() => {
        console.log("ChatArea -> messages", messages)
        if (messages?.allChat?.edges?.length && currentUser) {
            const messagesDataList = messages.allChat.edges.map((edge) => {
                const { createdAt, ownerId, message } = edge.node;
                return ({
                    data: {
                        timestamp: new Date(parseInt(createdAt)),
                        message,
                    },
                    isMine: currentUser._id === ownerId,
                    showTimestamp: false,
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
                    else {
                        console.log("SearchBar -> CreateConnection", chatAdded)
                    }
                    
                },
                updater: proxyStore => {
                    const createConnection = proxyStore.getRootField('chatAdded');
                    console.log("ChatArea -> createConnection", createConnection)
                    const root = proxyStore.get(ROOT_ID);
                    const chatAllQueryStore = root.getLinkedRecord(`RoomGraphGetAllMessage(roomId:"${activeRoom}")`);
                    console.log("ChatArea -> chatAllQueryStore", chatAllQueryStore)
                    const connection = ConnectionHandler.getConnection(chatAllQueryStore, "GetAllRoomChatList_allChat", []);
                    if (connection) {
                        const edge = ConnectionHandler.createEdge(
                            proxyStore,
                            connection,
                            createConnection,
                            'ChatList',
                        );
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
                    relay.loadMore(10, error => console.log(error));
                }
                else {
                    setLoading(false);
                    setOutOfData(true);
                }
            }
        }
    }, []);

    const lastMessage = () => {
        scrollToBottom();
        setShouldScrollToBottom(false);
    }

    return <ChatAreaWrapper ref={listRef}>
        {/* {messagesData.length === 0 && <div>Type something to begin chat</div>} */}
        {outOfData && <div>Out of data</div>}
        {loading && <div><Spin /></div>}
        {
            messagesData && messagesData.length &&
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