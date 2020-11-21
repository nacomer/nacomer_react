import React from "react";
import DetailIntroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  console.log(props.detailJson.SubPictures)
  return (
    <div>
      {props.detailJson.Videos.map((value, index) => {
        return <DetailIntroYoutubeItem url={value.videoURL} key={index} />
      })}
      {props.detailJson.SubPictures.map((value, index) => {
        return <DetailIntroGoodsItem url={value.subPicture} key={index} />
      })}
    </div>
  );
}
