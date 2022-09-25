import React, { useEffect, useState } from 'react'
import "./post.css"
import { MoreVert } from "@material-ui/icons"
import axios from 'axios'
import TimeAgo from 'react-timeago'
import { Link } from "react-router-dom"

export default function Post({ post }) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLike] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/v1/users?userId=${post.userId}`)
            setUser(res.data)
        }
        fetchUser();
    }, [post.userId])
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.userName}`}>
                            <img className='postProfileImg' src={user?.profilePicture || PF + "person/noAvatar.png"} alt="" />
                        </Link>
                        <span className="postUsername">{user.userName}</span>
                        <span className="postDate">
                            <TimeAgo date={post.createdAt} />
                        </span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImg' src={PF + post?.img} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src={`${PF}like.png`} className="likeIcon" onClick={likeHandler} alt="" />
                        <img src={`${PF}heart.png`} className="likeIcon" onClick={likeHandler} alt="" />
                        <span className="likeCounter">{like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
