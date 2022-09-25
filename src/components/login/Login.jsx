import React, { useRef } from 'react'
import "./login.css"

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handelClick = (event) => {
        event.preventDefault();

    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">Connect with friends and the world around you ...</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handelClick}>
                        <input type="email" required placeholder='Email' className='loginInput' ref={email} />
                        <input type="password" required placeholder='Password' minLength={6} className='loginInput' ref={password} />
                        <button className='loginButton'>Log In</button>
                        <span className='loginForgot'>Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
