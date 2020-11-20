import DetailHeader from "./DetailHeader";
import DetailIntro from "./detailintro/DetailIntro";
import DetailComment from "./detailcomment/DetailComment";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

export default function Detail() {
  return (
    <div>
      <DetailHeader />
      <Tabs>
        <TabList>
          <Tab>review</Tab>
          <Tab>Introduction</Tab>
        </TabList>
        <TabPanel>
          <DetailComment />
        </TabPanel>
        <TabPanel>
          <DetailIntro />
        </TabPanel>
      </Tabs>
    </div>
  );
}
