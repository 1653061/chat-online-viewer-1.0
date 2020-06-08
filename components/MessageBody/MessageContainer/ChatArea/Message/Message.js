import React, { useEffect } from 'react';
import moment from 'moment';
import { MessageWrapper, MessageSection, TimeStamp, BubbleContainer, Bubble, LinkHolder } from './Message.style';

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

    const urlRegex = /(https?:\/\/[^\s]+)/g;

    if (urlRegex.test(data.message)) {
        data.message = <LinkHolder href={data.message} isMine={isMine} target="_blank" >{data.message}</LinkHolder>
    }    

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
                        {data.message}
                    </Bubble>
                </BubbleContainer>
            </MessageSection>

        </MessageWrapper>
}

export default Message;