import React from "react";
import DetailIntroGoodsItem from "./DetailIntroGoodsItem";
import DetailIntroYoutubeItem from "./DetailIntroYoutubeItem";

export default function DetailIntro(props) {
  return (
<>
    <table width="100%">
      <caption>オススメ動画</caption>
      {props.detailJson.Videos.map((value, index) => {
        return <DetailIntroYoutubeItem url={value.videoURL} description={value.description} key={index} />
      })}
    </table>
    <table width="100%">
    <caption>オススメグッズ・イベント</caption>
       {props.detailJson.SubPictures.map((value, index) => {
        return <DetailIntroGoodsItem url={value.subPicture} description={value.description} key={index} />
      })}
  </table>
  </>
    // <div className="detailIntro">
    //   <h2>{props.detailJson.name}の詳細・紹介</h2>
    //   <h3>オススメ動画</h3>
    //   {props.detailJson.Videos.map((value, index) => {
    //     return <DetailIntroYoutubeItem url={value.videoURL} description={value.description} key={index} />
    //   })}
    //   <h3>オススメグッズ・イベント</h3>
    //   {props.detailJson.SubPictures.map((value, index) => {
    //     return <DetailIntroGoodsItem url={value.subPicture} description={value.description} key={index} />
    //   })}
    // </div>
  );
}
