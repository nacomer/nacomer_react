import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import List from "./list/List"
import Detail from "./detail/Detail"

export default function App() {
    return (
        <div>
        <Header />
        <List />
        <Detail />
        <Footer />
        </div>
    );
}