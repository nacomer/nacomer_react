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
	return (
		<div className="app">
			{viewMode !== "Top" && <Header setViewMode={setViewMode} />}

			{viewMode === "Top" && <Top setViewMode={setViewMode} />}
			{viewMode === "List" && <List setViewMode={setViewMode} setHobbyId={setHobbyId} />}
			{viewMode === "Detail" && <Detail hobbyId={hobbyId} />}
			<br />
			{viewMode !== "Top" && <Footer />}
		</div>
	);
}