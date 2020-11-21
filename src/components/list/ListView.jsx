import React, { useEffect, useState } from "react";
import "../../styles/list.css"
import HobbyService from "../../services/listService"

export default function ListView(props) {
    // const apiHobby = [
    //     {
    //         hobbyid: 1,
    //         name: "golf",
    //         picture: "./golf.jpeg",
    //         periodID: 1
    //     },
    //     {
    //         hobbyid: 2,
    //         name: "camp",
    //         picture: "./camp.jpeg",
    //         periodID: 2
    //     },
    //     {
    //         hobbyid: 3,
    //         name: "swimming",
    //         picture: "./swimming.jpg",
    //         periodID: 3
    //     }
    // ]

    const [apiHobby, setApiHobby] = useState([]);

    useEffect(() => {
        const hobbyService = new HobbyService();
        const testGetApi = async () => {
            const testhobby = await hobbyService.getHobby();
            setApiHobby(testhobby)
        }
        testGetApi()

    }, [])

    const hobbyClicked = (element) => {
        // history.pushState(null, null, element.name)
        props.setViewMode("Detail");
        props.setHobbyId(element.hobbyid)
    }
    return (
        <div className="listView">
            {
                apiHobby
                    .filter((element) => {
                        return (
                            (props.filterdPeriod.length === 0) ||
                            (props.filterdPeriod.includes(element.period))
                        )
                    })
                    .map((element) => {
                        return (
                            <div key={element.name}>
                                <img
                                    src={element.mainPicture}
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

        </div>
    )
}