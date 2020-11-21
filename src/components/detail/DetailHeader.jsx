import React from "react";

export default function DetailHeader(props) {

	return (
		<div>
			<h1>{props.detailJson.name}</h1>
			<img alt="" src={props.detailJson.mainPicture}
				width="200px" />
			<p>{props.detailJson.description}</p>
			<p>費用：約　{props.detailJson.cost}　円</p>
			<hr></hr>
		</div>
	);
}