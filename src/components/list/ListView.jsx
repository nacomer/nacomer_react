import React from "react";
import "../../styles/list.css"
//const history = window.history;

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
        },
        {
            hobbyid: 4,
            name: "mountain",
            picture: "./mountain.jpeg",
            periodID: 2
        },
        {
            hobbyid: 5,
            name: "music",
            picture: "./music.png",
            periodID: 1
        }
    ]

    const hobbyClicked = (element) => {
        // history.pushState(null, null, element.name)
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
                        <div
                            key={element.name}
                            className="listPicDiv"
                            onClick={() => { hobbyClicked(element) }}
                        >
                            <img
                                src={element.picture}
                                alt={element.name}
                                className="listPic"
                                loading="lazy"
                            ></img>
                            <button
                                name={element.name}
                            >
                                {element.name}
                            </button>
                        </div>)
                })}

        </div >
    )
}