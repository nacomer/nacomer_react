import React from 'react';

export default function DetailIntroYoutubeItem(props) {

	return (
    <tr>
    <td>
			<div className="youtube">
				<iframe
					src={props.url}
					className="youtubeIframe"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen >
				</iframe>  
			</div>
      </td>
      <td>
      <p>{props.description}</p>
      </td>
      </tr>
	)
}

