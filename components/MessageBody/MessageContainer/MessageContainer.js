import React from 'react';
import { QueryRenderer } from 'react-relay';
import { GetAllMessage } from 'relay/graphql/RoomGraph';
import environment from 'relay/RelayEnvironment';
import { MCWrapper, NoMessage } from './MessageContainer.style';
import ChatTitle from './ChatTitle';
import ChatArea from './ChatArea';
import ChatComposer from './ChatComposer';
import SearchBar from './SearchBar';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const MessageContainter = ({newMessage, activeRoom}) => {
    return <MCWrapper>
        {newMessage ? <SearchBar /> : 
            <><ChatTitle activeUser={activeRoom ? activeRoom.activeUser : null} />
            {
                activeRoom && activeRoom.roomId ?
                <QueryRenderer environment={environment()} query={GetAllMessage} variables={{count: 10, cursor: '', roomId: activeRoom.roomId}} render={({ error, props }) => {
                    if (error) {
                        return null;
                    }
                    if (!props) {
                        const loadingIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
                        return <NoMessage><div className="tablecell"><Spin indicator={loadingIcon} /></div></NoMessage>
                    }
                    return <ChatArea activeRoom={activeRoom.roomId} messages={props.RoomGraphGetAllMessage}/>
                }}/> : <NoMessage></NoMessage>
            }
            <ChatComposer activeRoom={activeRoom ? activeRoom.roomId : null}/></>
        }
    </MCWrapper>    
}

export default MessageContainter;