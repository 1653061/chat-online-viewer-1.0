import React, { useEffect } from 'react';
import moment from 'moment';
import { MessageWrapper, MessageSection, TimeStamp, BubbleContainer, Bubble } from './Message.style';

const Message = props => {
    const {
        data,
        isMine,
        showTimestamp
    } = props.mydata;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    
    useEffect(() => {
        if (props.lastMessage) {
            props.lastMessage();
        }
    }, []);

    return <MessageWrapper>
            <MessageSection>
            {
                showTimestamp &&
                    <TimeStamp>
                        { friendlyTimestamp }
                    </TimeStamp>
            }

                <BubbleContainer isMine={isMine} >
                    <Bubble isMine={isMine} title={friendlyTimestamp}>
                        { data.message }
                    </Bubble>
                </BubbleContainer>
            </MessageSection>

        </MessageWrapper>
}

export default Message;