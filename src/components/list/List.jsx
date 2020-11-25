import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListFilter from './ListFilter';

import ListView from './ListView';
import '../../styles/list.css';

export default function List(props) {
  const [filteredPeriod, setFilteredPeriod] = useState([]);
  const [filteredName, setFilteredName] = useState('');
  const [filteredCategory, setFilteredCategory] = useState([]);

  return (
    <div className="list">
      <ListFilter
        filteredPeriod={filteredPeriod}
        setFilteredPeriod={setFilteredPeriod}
        filteredName={filteredName}
        setFilteredName={setFilteredName}
        filteredCategory={filteredCategory}
        setFilteredCategory={setFilteredCategory}
        className="listFilter"
      />
      <ListView
        filteredPeriod={filteredPeriod}
        filteredName={filteredName}
        filteredCategory={filteredCategory}
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
