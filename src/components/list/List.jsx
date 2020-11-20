import React, { useState } from "react";
import ListFilter from "./ListFilter"
import ListView from "./ListView"

export default function List() {
    const [filterdPeriod, setFilteredPeriod] = useState([])


    return (
        <div>
            <font color="red">Filterd Period : {filterdPeriod}</font>
            <ListFilter
                filterdPeriod={filterdPeriod}
                setFilteredPeriod={setFilteredPeriod}
            />
            <ListView
                filterdPeriod={filterdPeriod}
            />
        </div >
    )
}