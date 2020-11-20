import React from "react";

export default function DetailIntroYoutubeItem(props) {    
    return <iframe width="560" height="315" 
    src={props.url} 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
    </iframe>
}