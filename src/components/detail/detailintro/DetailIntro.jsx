import React from "react";
import DetailIntroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  return (
    <div>
      {props.detailJson.Youtube.map((value, index) => {
        return <DetailIntroYoutubeItem url={value.youtubeURL} key={index} />
      })}
      {props.detailJson.subPictures.map((value, index) => {
        return <DetailIntroGoodsItem url={value.subPicture} key={index} />
      })}
    </div>
  );
}
