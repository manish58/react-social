import React from 'react'
import "./sidebar.css"
import { Bookmark, Chat, Event, Group, PlayArrowRounded, RssFeed, School, WorkOutline } from '@material-ui/icons'
import { Users } from "./../../dummyData"
import CloseFriends from '../closefriends/CloseFriends'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
export default function Sidebar() {
    return (
        <>
            <div className='sideBar'>
                <PerfectScrollbar>

                    <div className="sidebarWrapper">
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <RssFeed className='sidebarIcon' />
                                <span className="sidebarItemText">Feed</span>
                            </li>
                            <li className="sidebarListItem">
                                <Chat className='sidebarIcon' />
                                <span className="sidebarItemText">Chats</span>
                            </li>
                            <li className="sidebarListItem">
                                <PlayArrowRounded className='sidebarIcon' />
                                <span className="sidebarItemText">Videos</span>
                            </li>
                            <li className="sidebarListItem">
                                <Group className='sidebarIcon' />
                                <span className="sidebarItemText">Groups</span>
                            </li>
                            <li className="sidebarListItem">
                                <Bookmark className='sidebarIcon' />
                                <span className="sidebarItemText">Bookmarks</span>
                            </li>
                            <li className="sidebarListItem">
                                <RssFeed className='sidebarIcon' />
                                <span className="sidebarItemText">Questions</span>
                            </li>
                            <li className="sidebarListItem">
                                <WorkOutline className='sidebarIcon' />
                                <span className="sidebarItemText">Jobs</span>
                            </li>
                            <li className="sidebarListItem">
                                <Event className='sidebarIcon' />
                                <span className="sidebarItemText">Event</span>
                            </li>
                            <li className="sidebarListItem">
                                <School className='sidebarIcon' />
                                <span className="sidebarItemText">Course</span>
                            </li>
                        </ul>
                        <button className='sidebarButton'>Show more</button>
                        <hr className='sidebarHr' />
                        <ul className="sidebarFriendList">
                            {Users.map((user) => (
                                <CloseFriends key={user.id} closeFriends={user} />
                            ))}
                        </ul>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    )
}
