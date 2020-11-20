import React from "react";
import DetailIntoroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntoroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  return (
    <div>
      {props.detailJson.Youtube.map((value)=>{
        return <DetailIntoroGoodsItem url={value}/>
      })}
      {props.detailJson.Youtube.map((value)=>{
        return <DetailIntoroYoutubeItem url={value}/>
      })}
    </div>
  );
}
