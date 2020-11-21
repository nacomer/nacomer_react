import React from "react";
import DetailIntoroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntoroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  return (
    <div>
      {props.detailJson.Youtube.map((value, index)=>{
        return <DetailIntoroYoutubeItem url={value.youtubeURL} key={index}/>
      })}
      {props.detailJson.subPicture.map((value, index)=>{
        return <DetailIntoroGoodsItem url={value.subpictureURL} key={index}/>
      })}
    </div>
  );
}
