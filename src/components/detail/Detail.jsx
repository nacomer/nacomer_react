import React from "react";
import DetailHeader from "./DetailHeader";
import DetailIntro from "./detailintro/DetailIntro";
import DetailComment from "./detailcomment/DetailComment";

export default function Detail() {
  return (
    <div>
      <DetailHeader />
      <DetailIntro />
      <DetailComment />
    </div>
  );
}
