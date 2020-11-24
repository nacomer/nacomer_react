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

  return (
    <div className="listView">
      {apiHobby
			  .filter((hobby) => (
          (props.filteredPeriod.length === 0)
						|| (props.filteredPeriod.includes(hobby.period))
        ))
			  .map((hobby) => (
  <div key={hobby.name} className="hobbyDiv">
    <img src={hobby.mainPicture} alt={hobby.name} className="hobbyImg" />
    <div className="hobbyButtonDiv">
      <button id={hobby.id} onClick={hobbyClicked} className="hobbyButton">
        {hobby.name}
      </button>
    </div>
  </div>
        ))}
    </div>
  );
}
