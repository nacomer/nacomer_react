import React from 'react';
import DetailIntroGoodsItem from './DetailIntroGoodsItem';
import DetailIntroYoutubeItem from './DetailIntroYoutubeItem';

export default function DetailIntro(props) {
  return (
    <>
      <table width="100%">
        <caption>オススメ動画</caption>
        <tbody>
          {props.detailJson.Videos.map((value, index) => {
            return (
              <DetailIntroYoutubeItem
                url={value.videoURL}
                description={value.description}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
      <table width="100%">
        <caption>オススメグッズ・イベント</caption>
        <tbody>
          {props.detailJson.SubPictures.map((value, index) => {
            return (
              <DetailIntroGoodsItem
                url={value.subPicture}
                description={value.description}
                key={index}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
