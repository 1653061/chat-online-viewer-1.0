import React from 'react';
import { QueryRenderer } from 'react-relay';
import { GetAllMessage } from 'relay/graphql/RoomGraph';
import environment from 'relay/RelayEnvironment';
import { MCWrapper, NoActiveRoom, LoadingMessage } from './MessageContainer.style';
import ChatTitle from './ChatTitle';
import ChatArea from './ChatArea';
import ChatComposer from './ChatComposer';
import SearchBar from './SearchBar';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const MessageContainter = ({newMessage, activeRoom, handleSearchDone}) => {
    return <MCWrapper>
        {newMessage ? <SearchBar handleSearchDone={handleSearchDone}/> : 
            activeRoom && activeRoom.roomId ?
            <><ChatTitle activeUser={activeRoom.activeUser} activeRoom={activeRoom} />
                <QueryRenderer environment={environment()} query={GetAllMessage} variables={{count: 20, cursor: '', roomId: activeRoom.roomId}} render={({ error, props }) => {
                    if (error) {
                        return null;
                    }
                    if (!props) {
                        const loadingIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
                        return <LoadingMessage><div className="tablecell"><Spin indicator={loadingIcon} /></div></LoadingMessage>
                    }
                    return <ChatArea activeRoom={activeRoom.roomId} messages={props.RoomGraphGetAllMessage}/>
                }}/> 
            
            <ChatComposer activeRoom={activeRoom.roomId}/></>
            : <NoActiveRoom>
                <div className="content">
                    Pick someone to start messaging
                </div>
            </NoActiveRoom>
        }
    </MCWrapper>    
}

export default MessageContainter;