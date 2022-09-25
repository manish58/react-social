import React from 'react'
import "./rightbar.css"
import { Users } from "./../../dummyData";
import Online from '../../components/online/online.jsx'

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" className='birthdayImg' alt="" />
                    <span className='birthdayText'> <b>Manish Rawat</b> and <b> 3 others friends </b>have birthday today</span>
                </div>
                <img className='rightbarAd' src="/assets/ad.png" alt="" />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((user) => (
                        <Online key={user.id} user={user} />
                    ))}
                </ul>
            </>
        )
    }
    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "-"}</span>
                    </div>
                    <h4>User Friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src={`${PF}person/1.jpeg`} className='rightbarFollowingImg' alt="" />
                            <span className="rightbarFollowingName">John</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}person/2.jpeg`} className='rightbarFollowingImg' alt="" />
                            <span className="rightbarFollowingName">Marry</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src={`${PF}person/3.jpeg`} className='rightbarFollowingImg' alt="" />
                            <span className="rightbarFollowingName">Lakshimi</span>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightBar'>
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
