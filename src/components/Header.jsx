import React from "react";
import logo from "../image/logo.png";
import "../styles/header.css";


export default function Header() {
    return (
        <div>
        <img
            src={logo}
            alt="logo"
            className="logo"
        />
        <hr></hr>
        </div>
    )
}