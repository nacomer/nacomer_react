import React from "react";
import logo from "../image/logo.png";
import "../styles/header.css";
const history = window.history;


export default function Header(props) {
	return (
		<div className="header" onClick={() => { history.pushState(null, null, ""); props.setViewMode("List") }}>
			<img src={logo} alt="logo" className="logo" />
			<div className="catchCopy">
				~ Your Gate of New Hobby ~
			</div>

			<p>ユーザ名:{props.loginUser.name}</p>
		</div>
	)
}