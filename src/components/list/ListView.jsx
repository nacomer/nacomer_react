import React, { useEffect, useState } from "react";
import "../../styles/list.css"
import HobbyService from "../../services/hobbyService";

export default function ListView(props) {
	const [apiHobby, setApiHobby] = useState([]);

	useEffect(() => {
		const hobbyService = new HobbyService();
		const getHobby = async () => {
			const hobbyData = await hobbyService.getHobby();
			setApiHobby(hobbyData);
		}
		getHobby();
	}, [])

	const hobbyClicked = (event) => {
		props.setViewMode("Detail");
		props.setHobbyId(event.target.id);
	}

	return (
		<div className="listView">
			{apiHobby
				.filter((hobby) => {
					return (
						(props.filteredPeriod.length === 0) ||
						(props.filteredPeriod.includes(hobby.period))
					)
				})
				.map((hobby) => {
					return (
						<div key={hobby.name}>
							<img src={hobby.mainPicture} alt={hobby.name} />
							<button id={hobby.id} onClick={hobbyClicked}>
								{hobby.name}
							</button>
						</div>
					)
				})
			}
		</div>
	)
}