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
      const hobbyDetail = await hobbyService.getHobbyDetail(props.hobbyId);
      setDetailJson(hobbyDetail);
    };
    getHobbyDetail();
  }, []);

  return (
    <div>
      <DetailHeader detailJson={detailJson} />
      <Tabs>
        <TabList>
          <Tab>review</Tab>
          <Tab>Introduction</Tab>
        </TabList>
        <TabPanel>
          <DetailComment hobbyId={props.hobbyId} />
        </TabPanel>
        <TabPanel>
          <DetailIntro detailJson={detailJson} />
        </TabPanel>
      </Tabs>
    </div>
  );
}
