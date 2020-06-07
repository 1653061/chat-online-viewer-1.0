import React, { useEffect, useRef, useContext } from 'react';
import { fetchQuery } from 'react-relay';
import environment from 'relay/RelayEnvironment';
import { ConnectVideoCall } from 'relay/graphql/RoomGraph';
import MainContext from 'constants/MainContext';
import { MainCall, CallArea } from './CallPage.style';

const CallPage = ({ pid, called, peerId }) => {
    const { currentUser } = useContext(MainContext);
    const videoRef = useRef(null);
    useEffect(() => {
            if (currentUser) {
            const peer = new window.Peer(currentUser._id);
            videoRef.current.onloadedmetadata = function(e) {
                videoRef.current.play();
            }
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            navigator.getUserMedia({
                audio: true,
                video: true,
              }, (stream) => {
                if (!called || !peerId) {
                    peer.on("open", () => {
                        fetchQuery(environment(),
                            ConnectVideoCall,
                            {
                                peerId: currentUser._id,
                                roomId: pid,
                            }
                        );
                        peer.on('call', function(call) {
                            navigator.getUserMedia({video: true, audio: true}, function(stream) {
                              call.answer(stream);
                              call.on('stream', function(remoteStream) {
                              videoRef.current.srcObject =remoteStream;
                            });
                            }, function(err) {
                              console.log('Failed to get local stream' ,err);
                            });
                          });
                    })
                } else {
                    peer.on("open", () => {
                        const call = peer.call(peerId, window.localStream);
                        call.on('stream', function(remoteStream) {
                            videoRef.current.srcObject =remoteStream;
                        });
                    })

                }
                window.localStream = stream;
              }, () => {});
        }
    }, [currentUser]);
    return (
        <MainCall>
            <CallArea id="client-video" ref={videoRef}/>
        </MainCall>)
}

export default  CallPage;