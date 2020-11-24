import React from 'react';

export default function DetailIntroGoodsItem(props) {
  return (
    <tr>
      <td>
        <div className="detailIntroGoods">
          <img src={props.url} className="detailGoodsImg" />
        </div>
      </td>
      <td>
        <p>{props.description}</p>
      </td>
    </tr>
  );
}
