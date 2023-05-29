import React, { useState } from "react";

const GetStarted= ()=> {

    const [userRegistration, setuserRegistration]= useState({
username: "",
password: ""
    })

    const handleInput= (e)=> {
        const name= e.target.name;
        const value= e.target.value;
        console.log(name, value)
        
        setuserRegistration({...userRegistration, [name]: value})

    }
    const handleSubmit= (e)=> {
        e.preventDefault();
        
    }
    return (
        <div className="sign-up" id= "getstarted">
            <h1 className="main-heading">Get Started with us!!</h1>
            <h2 className="Register-title">Sign Up</h2>
            <form action= "" onSubmit={handleSubmit}>
                <div className="Register">
                <label className="username">Username
                <input className="input-text" type= "text" name= "username" 
                value={userRegistration.username} 
                onChange={handleInput}
                autoComplete="off"></input>
                </label>
                </div>
                <div className="Register-password">
                <label className="password">Password
                <input className="input-text" type= "password" name= "password"
                value={userRegistration.password}
                onChange={handleInput}
                autoComplete="off"></input>
                </label>
                </div>
                <button className="submit-button" type= "submit">Register</button>
            </form>
        </div>
    )
}

export default GetStarted;