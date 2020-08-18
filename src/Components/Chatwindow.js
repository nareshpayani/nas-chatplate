import React, { useState, useEffect } from 'react'
import "../Css/Chatwindow.css"
import {useParams} from "react-router-dom"
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../Firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chatwindow() {

    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if(roomId) {
            db.collection('rooms').doc(roomId).onSnapshot((snapshot) => (
               setRoomDetails(snapshot.data()) 
            ))
        }

        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) =>
            setRoomMessages(
                snapshot.docs.map((doc) => doc.data())
            )
        );
      
    }, [roomId])
    
   
console.log(roomDetails);
console.log(roomMessages);

    return (
        <div className="chatwindow">
            <div className="chatwindow__header">
                <div className="chatwindow__heaaderLeft">
                    <h4 className="chatwindow__channelName"> 
                    <strong># {roomDetails?.name}</strong>
                        <StarBorderOutlinedIcon />
                    </h4>
                </div>

                <div className="chatwindow__heaaderRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>

            <div className="chatwindow__messages">
                {/* message component */}

                {roomMessages.map(({message, user, userImage, timestamp}) => 
                
                <Message 
                message = {message}
                user={user}
                userImage={userImage}
                timestamp={timestamp}
                />
                )}
                
            </div>
             <ChatInput channelName= {roomDetails?.name} channelId  />
        </div>
    )
}

export default Chatwindow
