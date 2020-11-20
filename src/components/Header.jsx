import React from "react";
import logo from "../image/logo.png";
import "../styles/header.css";

export default function Header() {
    return (
        <img
            src={logo}
            alt="logo"
            className="logo"
        />
    )

}