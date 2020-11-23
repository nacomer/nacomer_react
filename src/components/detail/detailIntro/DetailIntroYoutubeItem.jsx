import React from "react";

export default function DetailIntroYoutubeItem(props) {
	return (
		<>
			<div className="youtube">
				<iframe
					src={props.url}
					className="youtubeIframe"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen >
				</iframe>
			</div>
		</>
	)
}