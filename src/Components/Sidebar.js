import React, {useState, useEffect} from 'react'
import "../Css/Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOptions from './SidebarOptions';
import CommentIcon from '@material-ui/icons/Comment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

import db from '../Firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {

const[channels, setChannels] = useState([]);
const[{user}] = useStateValue();

useEffect(() => {
    //Run this code when the sidebar component loads
    db.collection('rooms').onSnapshot((snapshot) => (
        setChannels(
            snapshot.docs.map ((doc) =>({
                id: doc.id,
                name: doc.data().name,
    })))))
   
}, [])

    return (
        <div className="sidebar"> 
           <div className="sidebar__header">
               <div className="sidebar__info">
                <h2>NAS | ChatPlate</h2>
                <h3><FiberManualRecordIcon/>{user?.displayName}</h3>
               </div>
               <CreateIcon />
             
           </div>
           <SidebarOptions Icon={CommentIcon} title="Threads"/>
           <SidebarOptions Icon={InboxIcon} title="Mentions & Reactions"/>
           <SidebarOptions Icon={DraftsIcon} title="Saved Items"/>
           <SidebarOptions Icon={BookmarkBorderIcon} title="Channel Browser"/>
           <SidebarOptions Icon={PeopleAltIcon} title="People & User Groups"/>
           <SidebarOptions Icon={AppsIcon} title="Apps"/>
           <SidebarOptions Icon={FileCopyIcon} title="File Browser"/>
           <SidebarOptions Icon={ExpandLessIcon} title="Show Less"/>
           <hr/>
           <SidebarOptions Icon={ExpandMoreIcon} title="Channels"/>
           <hr/>
           <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel"/>
           {channels.map(channel => (
               <SidebarOptions title={channel.name} id={channel.id} />
           ))}
        </div>
    )
}

export default Sidebar
