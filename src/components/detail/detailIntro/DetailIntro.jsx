import React from 'react';
import DetailIntroGoodsItem from './DetailIntroGoodsItem';
import DetailIntroYoutubeItem from './DetailIntroYoutubeItem';

export default function DetailIntro(props) {
  return (
    <table className="introTable">
      <tbody>
        <th colSpan="2">
          <h3>オススメ動画</h3>
        </th>
        {props.detailJson.Videos.map((value, index) => (
          <DetailIntroYoutubeItem
            url={value.videoURL}
            description={value.description}
            key={index}
          />
        ))}
      </tbody>
      <th colSpan="2">
        <h3>オススメグッズ・イベント</h3>
      </th>
      <tbody>
        {props.detailJson.SubPictures.map((value, index) => (
          <DetailIntroGoodsItem
            url={value.subPicture}
            description={value.description}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
}
