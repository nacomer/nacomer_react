import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import List from "./list/List"
import Detail from "./detail/Detail"
import Top from "./Top/Top"
import "../styles/app.css"

export default function App() {
	const [viewMode, setViewMode] = useState("List");
	const [hobbyId, setHobbyId] = useState();
	const [loginUser, setLoginUser] = useState()

	return (
		<div className="app">
			{loginUser && <Header setViewMode={setViewMode} loginUser={loginUser} />}

			{!loginUser && <Top setLoginUser={setLoginUser} />}
			{(loginUser && viewMode === "List") && <List setViewMode={setViewMode} setHobbyId={setHobbyId} />}
			{(loginUser && viewMode === "Detail") && <Detail hobbyId={hobbyId} loginUser={loginUser} />}
			<br />
			{loginUser && <Footer />}
		</div>
	);
}