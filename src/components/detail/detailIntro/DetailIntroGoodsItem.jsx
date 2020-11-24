import React from 'react';

export default function DetailIntroGoodsItem(props) {
  return (
    <>
      <div className="detailIntroGoods">
        <img alt="goodImage" src={props.url} className="detailGoodsImg" />
      </div>
    </>
  );
}
