import React from 'react';
import DetailIntroGoodsItem from './DetailIntroGoodsItem';
import DetailIntroYoutubeItem from './DetailIntroYoutubeItem';

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
  );
}
