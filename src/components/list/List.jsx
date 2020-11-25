import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListFilter from './ListFilter';

import ListView from './ListView';
import '../../styles/list.css';

export default function List(props) {
  const [filteredPeriod, setFilteredPeriod] = useState([]);
  const [filterCost, setFilterCost] = useState('none');

  const costItemList = [
    { costId: 'low', lowCost: 0, highCost: 4999 },
    { costId: 'mid', lowCost: 5000, highCost: 9999 },
    { costId: 'high', lowCost: 10000, highCost: 99999 },
  ];

  return (
    <div className="list">
      <ListFilter
        costItemList={costItemList}
        filterCost={filterCost}
        setFilterCost={setFilterCost}
        filteredPeriod={filteredPeriod}
        setFilteredPeriod={setFilteredPeriod}
        className="listFilter"
      />
      <ListView
        costItemList={costItemList}
        filterCost={filterCost}
        filteredPeriod={filteredPeriod}
        setViewMode={props.setViewMode}
        setHobbyId={props.setHobbyId}
        className="listView"
      />
    </div>
  );
}

List.propTypes = {
  setViewMode: PropTypes.func.isRequired,
  setHobbyId: PropTypes.func.isRequired,
};
