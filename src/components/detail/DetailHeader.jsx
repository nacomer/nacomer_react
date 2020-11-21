import React from "react";
import "../../styles/detail.css";

export default function DetailHeader(props) {

	return (
		<div className="detailHeader">
			<h1 className="detailHeaderName">{props.detailJson.name}</h1>
			<img alt="" src={props.detailJson.mainPicture} className="detailImage" />
			<div className="detailText">
				<div>{props.detailJson.description}</div>
				<div>費用：約　{props.detailJson.cost}　円</div>
			</div>
			<hr></hr>
		</div>
	);
}