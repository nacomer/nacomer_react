import React from "react";

export default function ListFilter() {

    const periodItemList = [
        {
            periodId: 1,
            hours: 2
        },
        {
            periodId: 2,
            hours: 8
        },
        {
            periodId: 3,
            hours: 24
        }
    ]

    const setFilterValue = (value) => {
        console.log(value)

    };




    const filterItem = (
        <>
            <div>
                所要時間
            </div>
            <div>
                {periodItemList.map((element) => {
                    return (
                        <p key={element.periodId}>
                            <input
                                type="checkbox"
                                name="15m"
                                value={element.periodId}
                                onClick={() => { setFilterValue(element.periodId) }}
                            />
                            {element.hours}時間
                        </p>)
                })}
            </div>
        </>
    );

    return (<>{filterItem}</>)
}