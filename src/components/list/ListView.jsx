import React, { useEffect, useState } from "react";
import "../../styles/list.css"
import HobbyService from "../../services/listService";

export default function ListView(props) {
    const [apiHobby, setApiHobby] = useState([]);

    useEffect(() => {
        const hobbyService = new HobbyService();
        const getHobby = async () => {
            const hobbyData = await hobbyService.getHobby();
            setApiHobby(hobbyData);
        }
        getHobby();
    }, [])

    const hobbyClicked = (element) => {
        // history.pushState(null, null, element.name)
        props.setViewMode("Detail");
        props.setHobbyId(element.hobbyId)
    }
    return (
        <div className="listView">
            {
                apiHobby
                    .filter((element) => {
                        return (
                            (props.filteredPeriod.length === 0) ||
                            (props.filteredPeriod.includes(element.period))
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