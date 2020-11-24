import React from 'react';

export default function DetailIntroGoodsItem(props) {
  return (
    <tr className="introTr">
      <td>
        <div className="detailIntroGoods">
          <img src={props.url} className="detailGoodsImg" />
        </div>
      </td>
      <td className="introDescription">
        <p>{props.description}</p>
      </td>
    </tr>
  );
}
