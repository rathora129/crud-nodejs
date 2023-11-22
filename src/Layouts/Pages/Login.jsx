import React from 'react'
import "./css/login.css"

const Login = () => {
    return (
        <>
            <div className="container">
                <form className="col-lg-6 mx-auto 
                ">
                    <div className="flex-column">
                        <label>Email </label></div>
                    <div className="inputForm">
                        <input type="text" className="input" placeholder="Enter your Email" />
                    </div>

                    <div className="flex-column">
                        <label>Password </label></div>
                    <div className="inputForm">
                        <input type="password" className="input" placeholder="Enter your Password" />
                    </div>

                    <div className="flex-row">
                        <div>
                            <input type="checkbox" />
                            <label>Remember me </label>
                        </div>
                        <span className="span">Forgot password?</span>
                    </div>
                    <button className="button-submit">Sign In</button>
                    <p className="p">Don't have an account? <span className="span">Sign Up</span>

                    </p><p className="p line">Or With</p>
                </form>
            </div>
        </>
    )
}

export default Login