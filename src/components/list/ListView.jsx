import React from "react";
import "../../styles/list.css"

export default function ListView() {
    const apiHobby = [
        {
            name: "golf",
            picture: "./img/golf.png",
            periodID: 1
        },
        {
            name: "camp",
            picture: "./img/camp.png",
            periodID: 2
        }
    ]


    return (
        <div
            className="listView"
        >
            <p>ListView</p>
        </div>
    )
}