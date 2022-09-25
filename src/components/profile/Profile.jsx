import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import Sidebar from '../../components/sidebar/Sidebar.jsx'
import Topbar from '../../components/topbar/Topbar.jsx'
import "./profile.css"
import { useParams } from 'react-router'

export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const userName = useParams().username;

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`/v1/users?username=${userName}`);
            setUser(res.data)
        }
        fetchData();
    }, [userName])
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={user.coverPicture || `${PF}person/noCover.png`} className='profileCoverImg' alt="" />
                            <img src={user.profilePicture || `${PF}person/noAvatar.png`} className='profileUserImg' alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{user.userName}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={userName} />
                        <Rightbar user={user} />
                    </div>
                </div>
            </div>
        </>
    )
}
