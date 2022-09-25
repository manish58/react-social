import React from 'react'
import "./closefriends.css"

export default function CloseFriends({ closeFriends }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <li className="sidebarFriend">
            <img src={PF + closeFriends.profilePicture} alt="" className='sidebarFriendImg' />
            <span className='sidebarFriendname'>{closeFriends.username}</span>
        </li>
    )
}
