import React from 'react';
import '../../styles/list.css';

export default function ListFilter(props) {
  const periodItemList = [
    { periodId: 2, hours: 2 },
    { periodId: 8, hours: 8 },
    { periodId: 24, hours: 24 },
  ];

  const setFilterPeriod = (e) => {
    if (props.filteredPeriod.includes(e.target.value)) {
      props.setFilteredPeriod(
        props.filteredPeriod.filter((item) => item !== e.target.value),
      );
    } else {
      props.setFilteredPeriod([...props.filteredPeriod, e.target.value].sort());
    }
  };

  const setFilterName = () => {
    const searchName = document.getElementById('searchName').value;
    props.setFilteredName(searchName);
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
              onClick={setFilterPeriod}
            />
            {element.hours}
            時間
          </p>
        ))}
        <div className="search">趣味名で検索</div>
        <input
          id="searchName"
          type="text"
          name="title"
          className="searchNameInput"
          defaultValue=""
          placeholder="入力文字を含む趣味を検索"
        />
        <button className="searchNameButton" onClick={setFilterName}>検索</button>
      </div>
    </>
  );

  return <>{filterItem}</>;
}
