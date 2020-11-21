import React, { useState } from "react";
import ListFilter from "./ListFilter"
import ListView from "./ListView"
import "../../styles/list.css"

export default function List(props) {
    const [filterdPeriod, setFilteredPeriod] = useState([])

    return (
        <div className="list">
            <ListFilter
                filterdPeriod={filterdPeriod}
                setFilteredPeriod={setFilteredPeriod}

            />
            <ListView
                filterdPeriod={filterdPeriod}
                setViewMode={props.setViewMode}
                setHobbyId={props.setHobbyId}
            />
        </div >
    )
}