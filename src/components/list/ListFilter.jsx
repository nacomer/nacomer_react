import React from 'react';
import '../../styles/list.css';

export default function ListFilter(props) {
  const periodItemList = [
    { periodId: 2, hours: 2 },
    { periodId: 8, hours: 8 },
    { periodId: 24, hours: 24 },
  ];

  const categoryItemList = [
    { categoryId: 1, categoryName: 'アウトドア' },
    { categoryId: 2, categoryName: 'インドア' },
    { categoryId: 3, categoryName: 'スポーツ' },
    { categoryId: 4, categoryName: '旅行' },
    { categoryId: 5, categoryName: '料理' },
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

  const setFilterCategory = (e) => {
    if (props.filteredCategory.includes(e.target.value)) {
      props.setFilteredCategory(
        props.filteredCategory.filter((item) => item !== e.target.value),
      );
    } else {
      props.setFilteredCategory(
        [...props.filteredCategory, e.target.value].sort(),
      );
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
              onClick={setFilterPeriod}
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
          <p key={element.costId} className="searchRadioBtn">
            <input
              type="radio"
              name="cost"
              value={element.costId}
              onClick={(e) => props.setFilterCost(e.target.value)}
            />
            {`${element.lowCost}円 ~ ${element.highCost}円`}
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
        <button className="searchNameButton" onClick={setFilterName}>
          検索
        </button>

        <div className="search">カテゴリで検索</div>
        {categoryItemList.map((element) => (
          <p key={element.categoryId} className="searchCheckBox">
            <input
              type="checkbox"
              name="category"
              value={element.categoryName}
              onClick={setFilterCategory}
            />
            {element.categoryName}
          </p>
        ))}
      </div>
    </>
  );

  return <>{filterItem}</>;
}
