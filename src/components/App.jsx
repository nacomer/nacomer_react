import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import List from "./list/List"
import Detail from "./detail/Detail"

export default function App() {
	const [viewMode, setViewMode] = useState("List");
	const [hobbyId, setHobbyId] = useState();
	return (
		<div>
			<Header setViewMode={setViewMode} />
			{viewMode === "List" && <List setViewMode={setViewMode} setHobbyId={setHobbyId} />}
			{viewMode === "Detail" && <Detail hobbyId={hobbyId} />}
			<Footer />
		</div>
	);
}