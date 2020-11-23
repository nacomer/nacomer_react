import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import List from "./list/List"
import Detail from "./detail/Detail"
import Top from "./Top/Top"
import "../styles/app.css"

export default function App() {
	const [viewMode, setViewMode] = useState("Top");
	const [hobbyId, setHobbyId] = useState();
	const [loginUser, setLoginUser] = useState("")

	return (
		<div className="app">
			{viewMode !== "Top" && <Header setViewMode={setViewMode} loginUser={loginUser} />}

			{viewMode === "Top" && <Top setViewMode={setViewMode} setLoginUser={setLoginUser} />}
			{viewMode === "List" && <List setViewMode={setViewMode} setHobbyId={setHobbyId} />}
			{viewMode === "Detail" && <Detail hobbyId={hobbyId} />}
			<br />
			{viewMode !== "Top" && <Footer />}
		</div>
	);
}