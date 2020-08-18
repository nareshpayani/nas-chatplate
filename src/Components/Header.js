import React from 'react'
import "../Css/Header.css"
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useStateValue } from './StateProvider';

function Header() {

const[{user}] = useStateValue();

    return (
        <div className="header"> 
           
            <div className="header__left">
                {/* Avatar for logged in user */}

                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />

                {/* Time Icon */}

                <AccessTimeIcon />
            </div>

            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon className="header__searchIcon" />
                <input placeholder="Search" type="text"  />

                {/* Input */}
            </div>

            <div className="header_right">
                {/* Help Icon */}
                <HelpOutlineOutlinedIcon />
            </div>
        </div>
    )
}

export default Header
