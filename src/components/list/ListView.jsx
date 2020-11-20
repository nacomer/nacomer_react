import React from "react";
import "../../styles/list.css"

export default function ListView(props) {
    const apiHobby = [
        {
            hobbyid: 1,
            name: "golf",
            picture: "./golf.jpeg",
            periodID: 1
        },
        {
            hobbyid: 2,
            name: "camp",
            picture: "./camp.jpeg",
            periodID: 2
        },
        {
            hobbyid: 3,
            name: "swimming",
            picture: "./swimming.jpg",
            periodID: 3
        }
    ]

    const hobbyClicked = (element) => {
        props.setViewMode("Detail");
        props.setHobbyId(element.hobbyid)
    }

    return (
        <div className="listView">
            {apiHobby
                .filter((element) => {
                    return (
                        (props.filterdPeriod.length === 0) ||
                        (props.filterdPeriod.includes(element.periodID.toString()))
                    )
                })
                .map((element) => {
                    return (
                        <div key={element.name}>
                            <img
                                src={element.picture}
                                alt={element.name}
                            ></img>
                            <button
                                name={element.name}
                                onClick={() => { hobbyClicked(element) }}
                            >
                                {element.name}
                            </button>
                        </div>)
                })}

            <p>ListView</p>
        </div>)
}