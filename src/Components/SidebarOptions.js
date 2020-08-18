import React from 'react'
import "../Css/SidebarOptions.css"
import { useHistory } from 'react-router-dom'
import db from '../Firebase';


function SidebarOptions({Icon, id, title, addChannelOption}) {
    
    const history = useHistory ();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`);
        } else{
            history.push(title);
        }
    }

    const addChannel = () =>{
        const channelName = prompt ("please add the Channel Name");

        if(channelName) {
            db.collection("rooms").add({
                name:channelName,
            })
        }
    };

    return (
        <div className="sidebarOption" 
            onClick= {addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon className="sidebarOption__icon" />  }
            {Icon ? (<h3 className="sidebarOption__title">{title}</h3> ) : (<h3> <span className="sidebarOption_hash"># </span>{title}</h3>)}
        </div>
    )
}

export default SidebarOptions
