import React, { useEffect, useState } from 'react';
import '../../styles/list.css';
import HobbyService from '../../services/hobbyService';

export default function ListView(props) {
  const [apiHobby, setApiHobby] = useState([]);

  useEffect(() => {
    const hobbyService = new HobbyService();
    const getHobby = async () => {
      const hobbyData = await hobbyService.getHobby();
      setApiHobby(hobbyData);
    };
    getHobby();
  }, []);

  const hobbyClicked = (event) => {
    props.setViewMode('Detail');
    props.setHobbyId(event.target.id);
  };

  const costCheck = (hobby) => {
    const costItem = props.costItemList.filter(
      (value) => value.CostId === props.filterCost,
    );
    return costItem.lowCost <= hobby.cost && costItem.highCost >= hobby.cost;
  };

  return (
    <div className="listView">
      {apiHobby
        .filter(
          (hobby) => props.filteredPeriod.length === 0
            || props.filteredPeriod.includes(hobby.period),
        )
        .filter((hobby) => props.filterCost === 'none' || costCheck(hobby))
        .map((hobby) => (
          <div key={hobby.name} className="hobbyDiv">
            <img
              src={hobby.mainPicture}
              alt={hobby.name}
              className="hobbyImg"
            />
            <div className="hobbyButtonDiv">
              <button
                id={hobby.id}
                type="submit"
                onClick={hobbyClicked}
                className="hobbyButton"
              >
                {hobby.name}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
