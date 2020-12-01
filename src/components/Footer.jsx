import React from 'react';
import { Card, IconButton } from 'ui-neumorphism';
import Icon from '@mdi/react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { mdiInformationVariant, mdiAccountGroup, mdiChat } from '@mdi/js';
import '../styles/footer.css';
import { ViewModeList } from './utils/Viewmode';

export default function Footer(props) {
  const clickInfoIcon = () => {
    props.setViewMode(ViewModeList.info);
  };
  const clickMemberIcon = () => {
    props.setViewMode(ViewModeList.member);
  };
  const clickChatIcon = () => {
    props.setViewMode(ViewModeList.chat);
  };

  return (
    <Card elevation={1} className="footer">
      <div className="footerButtons">
        <IconButton size="big" text={false} onClick={clickInfoIcon}>
          <Icon
            path={mdiInformationVariant}
            size={1.0}
            className="footerButton"
          />
        </IconButton>
        <IconButton size="big" text={false} onClick={clickMemberIcon}>
          <Icon path={mdiAccountGroup} size={1.0} className="footerButton" />
        </IconButton>
        <IconButton size="big" text={false} onClick={clickChatIcon}>
          <Icon path={mdiChat} size={1.0} className="footerButton" />
        </IconButton>
      </div>
      {/* <p>&copy; Team Nacomer 2020 All rights reserved.</p> */}
    </Card>
  );
}
