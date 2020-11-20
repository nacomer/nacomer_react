import React from "react";
import logo from "../image/logo.png";
import "../styles/header.css";
const history = window.history;


export default function Header(props) {
    return (
        <div onClick={() => { history.pushState(null, null, ""); props.setViewMode("List") }}>
            <img
                src={logo}
                alt="logo"
                className="logo"
            />
            <hr></hr>
        </div>
    )
}