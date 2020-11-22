import React from "react";

export default function DetailIntroGoodsItem(props) {
	return (
		<>
			<div className="detailIntroGoods">
				<img src={props.url} className="detailGoodsImg" />
			</div>
		</>
	)
}