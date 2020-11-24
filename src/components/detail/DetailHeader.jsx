import React from "react";
import "../../styles/detail.css";

export default function DetailHeader(props) {
  return (
    <div className="detailHeader">
      <h1 className="detailHeaderName">{props.detailJson.name}</h1>
      <table className="detailTable">
        <thead />
        <tbody>
          <tr>
            <td rowSpan="3" className="imgTd">
              <img
                alt=""
                src={props.detailJson.mainPicture}
                className="detailImage"
              />
            </td>
            <td rowSpan="3" className="blankTd" />
            <th className="textTh">趣味名</th>
            <td className="textTd">{props.detailJson.name}</td>
          </tr>
          <tr>
            <th className="textTh">説明</th>
            <td className="textTd">{props.detailJson.description}</td>
          </tr>
          <tr>
            <th className="textTh">費用</th>
            <td className="textTd">
              約
              {props.detailJson.cost}
              　円
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
    </div>
  );
}
