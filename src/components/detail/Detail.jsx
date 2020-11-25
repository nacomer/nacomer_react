import React, { useEffect, useState } from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import DetailHeader from './DetailHeader';
import DetailIntro from './detailIntro/DetailIntro';
import DetailComment from './detailComment/DetailComment';
import 'react-tabs/style/react-tabs.css';
import HobbyService from '../../services/hobbyService';

require('dotenv').config();

export default function Detail(props) {
  const initDataJson = {
    name: '',
    mainPicture: '',
    description: '',
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
