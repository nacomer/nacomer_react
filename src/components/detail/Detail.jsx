import DetailHeader from "./DetailHeader";
import DetailIntro from "./detailIntro/DetailIntro";
import DetailComment from "./detailComment/DetailComment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import HobbyService from "../../services/hobbyService";
require("dotenv").config();

export default function Detail(props) {
  const initDataJson = {
    name: "",
    mainPicture: "",
    description: "",
    cost: undefined,
    periodID: undefined,
    Videos: [],
    subPictures: [],
  };
  const [detailJson, setDetailJson] = useState(initDataJson);

  useEffect(() => {
    const hobbyService = new HobbyService();
    const getHobbyDetail = async () => {
      // const hobbyDetail = {
      //   name: "tennis",
      //   mainPicture: "./image/main_tennis.jpg",
      //   description:
      //     "始めたばかりの頃はボールを打つこと自体も楽しいですし、上達してきたら習得した技術で作戦を立てて、相手の裏をかいたりボールをコントロールしたりするのも楽しいです。",
      //   cost: 10000,
      //   periodID: 1,
      //   Videos: [
      //     { videoURL: "https://www.youtube.com/embed/XLSamYktmUo" },
      //     { videoURL: "https://www.youtube.com/embed/27eyrDivrz0" },
      //   ],
      //   SubPictures: [
      //     { subPicture: "./image/img1.jpg" },
      //     { subPicture: "./image/img2.jpg" },
      //   ],
      // };
      const hobbyDetail = await hobbyService.getHobbyDetail(props.hobbyId);
      setDetailJson(hobbyDetail);
    };
    getHobbyDetail();
  }, []);

  return (
    <div>
      <DetailHeader detailJson={detailJson} />
      <br />
      <Tabs>
        <TabList>
          <Tab>review</Tab>
          <Tab>Introduction</Tab>
        </TabList>
        <TabPanel>
          <DetailComment hobbyId={props.hobbyId} loginUser={props.loginUser} />
        </TabPanel>
        <TabPanel>
          <DetailIntro detailJson={detailJson} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
