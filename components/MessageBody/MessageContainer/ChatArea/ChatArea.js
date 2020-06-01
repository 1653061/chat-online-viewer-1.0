import React, { useState, useRef, useEffect, useContext } from 'react';
import { ChatAreaWrapper } from './ChatArea.style';
import { createPaginationContainer } from 'react-relay';
import { GetAllMessageFragment, GetAllMessagePaging } from 'relay/graphql/RoomGraph';
import MainContext from 'constants/MainContext';
import { List } from 'antd';
import Message  from './Message';

const ChatArea = ({ messages = [] }) => {
    const { currentUser } = useContext(MainContext);
    const [messagesData, setMessagesData] = useState([]);

    useEffect(() => {
        if (messages?.allChat?.edges?.length && currentUser) {
            const messagesDataList = messages.allChat.edges.map((edge) => {
                const { createdAt, ownerId, message } = edge.node;
                return ({
                    data: {
                        timestamp: new Date(createdAt),
                        message,
                    },
                    isMine: currentUser._id === ownerId,
                    showTimestamp: true,
                })
            })
            setMessagesData(messagesDataList);
        }
    }, [currentUser, messages])

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, []);

    useEffect(scrollToBottom, [messages]);

    return <ChatAreaWrapper>
        {
            messagesData && messagesData.length &&
            <List 
                dataSource={messagesData}
                split={false}
                renderItem={
                    item => (
                        <Message mydata={item} />
                    )
                }
            />
        }
        <div ref={messagesEndRef} />
    </ChatAreaWrapper>
}

export default createPaginationContainer(ChatArea, { messages: GetAllMessageFragment}, {
    direction: 'backward',
    getConnectionFromProps(props) {
        return props.messages && props.rooms.allChat;
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
    query: GetAllMessagePaging,
});