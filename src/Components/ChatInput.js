import React, {useState} from 'react'
import "../Css/ChatInput.css"
import { Button } from '@material-ui/core'
import { useStateValue } from './StateProvider';
import db from '../Firebase';
import firebase from 'firebase'


function ChatInput( {channelName, channelId}) {

    const [input, setInput] = useState('');
    const[{user}] = useStateValue();

    const sendMessage = (e) => {
        e.preventDEfault();
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('message').add( {
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp,
                user: user.displayName,
                userImage:user.photoURL
            });
        }

        setInput("");
    }

    return (
        <div className="chatinput">
            <form>
                <input 
                value={input}
                onChange={ (e) => setInput (e.target.value)}
                placeholder={`Message # ${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage} >SEND</button>
            </form>
        </div>
    )
}

export default ChatInput
