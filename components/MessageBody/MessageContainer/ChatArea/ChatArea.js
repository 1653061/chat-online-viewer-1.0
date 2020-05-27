import React, { useRef, useEffect } from 'react';
import { ChatAreaWrapper } from './ChatArea.style';
import { List } from 'antd';
import Message  from './Message';

const ChatArea = ({}) => {
    const messages = [
        {
            data: {
                timestamp: new Date(),
                message: "Dkmm?"
            },
            isMine: false,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khoa oc cho"
            },
            isMine: false,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: true
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro"
            },
            isMine: true,
            showTimestamp: false
        },
        {
            data: {
                timestamp: new Date(),
                message: "Khai pro jashdkjhasdhsakjdhakjshdkjsahdkjhsakjdhksahdkhsakdhsakhdjksahdkshakdhsakdhsakhdhskadhaskjdh"
            },
            isMine: true,
            showTimestamp: false
        },
    ]
        
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, []);

    useEffect(scrollToBottom, [messages]);

    return <ChatAreaWrapper>
        <List 
            dataSource={messages}
            split={false}
            renderItem={
                item => (
                    <Message mydata={item} />
                )
            }
        />
        <div ref={messagesEndRef} />
    </ChatAreaWrapper>
}

export default ChatArea;