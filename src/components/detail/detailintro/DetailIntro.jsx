import React from "react";
import DetailIntroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  console.log(props.detailJson.SubPictures)
  return (
    <div className="detailIntro">
      <h2>{props.detailJson.name}の詳細・紹介</h2>
      <h3>オススメ動画</h3>
      {props.detailJson.Videos.map((value, index) => {
        return <DetailIntroYoutubeItem url={value.videoURL} key={index} />
      })}
      <h3>オススメグッズ・イベント</h3>
      {props.detailJson.SubPictures.map((value, index) => {
        return <DetailIntroGoodsItem url={value.subPicture} key={index} />
      })}
    </div>
  );
}
