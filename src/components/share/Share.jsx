import React from 'react'
import "./share.css"
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
export default function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input className='shareInput' type="text" placeholder="What's in your mind Manish" />
                </div>
                <hr className='shareHr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className='shareIcon' />
                            <span className='shareOptionsText'>Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className='shareIcon' />
                            <span className='shareOptionsText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className='shareIcon' />
                            <span className='shareOptionsText'>Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className='shareIcon' />
                            <span className='shareOptionsText'>Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
