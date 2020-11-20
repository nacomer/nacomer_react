import DetailHeader from "./DetailHeader";
import DetailIntro from "./detailintro/DetailIntro";
import DetailComment from "./detailcomment/DetailComment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
require("dotenv").config();

export default function Detail(props) {
  const initDataJson = {
    name: "",
    mainPicture: "",
    description:"",
    cost: undefined,
    periodID: undefined,
    Youtube: [],
    subPicture: [],
  };
  const [detailJson, setDetailJson] = useState(initDataJson);
  const hobbyDetail = {
    name: "tennis",
    mainPicture: "./main_tennis.jpg",
    description:
      "始めたばかりの頃はボールを打つこと自体も楽しいですし、上達してきたら習得した技術で作戦を立てて、相手の裏をかいたりボールをコントロールしたりするのも楽しいです。",
    cost: 10000,
    periodID: 1,
    Youtube: [
      { youtubeURL: "https://www.youtube.com/embed/XLSamYktmUo" },
      { youtubeURL: "https://www.youtube.com/embed/27eyrDivrz0" },
    ],
    subPicture: [
      { subpictureURL: "../../test_image/img1.jpg" },
      { subpictureURL: "../../test_image/img2.jpg" },
    ],
  };
  
  useEffect(() => {
    const getHobbyDetail = async () => {
      //const hobbyDetail = await fetch(process.env.URL + "/api/hobby/" + props.hobbyId)
      setDetailJson(hobbyDetail);
    };
    getHobbyDetail();
  },[]);
  return (
    <div>
      <DetailHeader detailJson={detailJson}/>
      <Tabs>
        <TabList>
          <Tab>review</Tab>
          <Tab>Introduction</Tab>
        </TabList>
        <TabPanel>
          <DetailComment hobbyId={props.hobbyId}/>
        </TabPanel>
        <TabPanel>
          <DetailIntro detailJson={detailJson}/>
        </TabPanel>
      </Tabs>
    </div>
  );
}
