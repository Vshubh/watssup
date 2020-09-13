import React from "react";
import logo from "../images/logo.jpg"
import "./navbar.css"
const navbar=()=>{
return (
    <div className="header">
    <button className="sidebar">&#9776;</button>
    <img src={logo} alt="logo" />
    <button className="btn">Logout</button>
    <label>haha</label>
    </div>
    )
}

export default navbar;