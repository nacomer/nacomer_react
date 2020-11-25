import React from 'react';
import '../../styles/list.css';

export default function ListFilter(props) {
  const periodItemList = [
    { periodId: 2, hours: 2 },
    { periodId: 8, hours: 8 },
    { periodId: 24, hours: 24 },
  ];

  const setFilterValue = (e) => {
    if (props.filteredPeriod.includes(e.target.value)) {
      props.setFilteredPeriod(
        props.filteredPeriod.filter((item) => item !== e.target.value),
      );
    } else {
      props.setFilteredPeriod([...props.filteredPeriod, e.target.value].sort());
    }
  };

  const filterItem = (
    <>
      <div className="filterItem">
        <div className="search">所要時間で検索</div>
        {periodItemList.map((element) => (
          <p key={element.periodId} className="searchCheckBox">
            <input
              type="checkbox"
              name="period"
              value={element.periodId}
              onClick={setFilterValue}
            />
            {element.hours}
            時間
          </p>
        ))}
        <div className="search">費用で検索</div>
        <p key="none" className="searchRadioBtn">
          <input
            type="radio"
            name="cost"
            value="none"
            onClick={(e) => {
              props.setFilterCost(e.target.value);
            }}
          />
          選択しない
        </p>
        {props.costItemList.map((element) => (
          <p key={element.costId} className="searchRadioByn">
            <input
              type="radio"
              name="cost"
              value={element.costId}
              onClick={(e) => props.setFilterCost(e.target.value)}
            />
            {`${element.lowCost}円 ~ ${element.highCost}円`}
          </p>
        ))}
      </div>
    </>
  );

  return <>{filterItem}</>;
}
