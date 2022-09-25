import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./feed.css"
import axios from "axios"

export default function Feed({ userId }) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            const res = userId ?
                await axios.get("/v1/posts/profile/" + userId)
                : await axios.get("/v1/posts/timeline/6321ec6fe38bb8cb050c8098")
            console.log(res.data);
            setPosts(res.data)
        }
        fetchPosts();
    }, [userId])
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {posts.map((post) => (
                    <Post key={post._id} post={post} />
                ))}
            </div>
        </div>
    )
}
