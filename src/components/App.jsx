import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import List from "./list/List"
import Detail from "./detail/Detail"

export default function App() {
    const [viewMode, setViewMode] = useState("Detail");
    return (
        <div>
        <Header />
        {viewMode==="List" && <List />}
        {viewMode==="Detail" &&<Detail />}
        <Footer />
        </div>
    );
}