import React from 'react';
import { Card, IconButton } from 'ui-neumorphism';
import Icon from '@mdi/react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { mdiInformationVariant, mdiAccountGroup, mdiChat } from '@mdi/js';
import '../styles/footer.css';

export default function Footer(props) {
  const viewModeList = {
    info: 'info',
    member: 'member',
    chat: 'chat',
  };
  return (
    <Card elevation={1} className="footer">
      <div className="footerButtons">
        <IconButton
          size="big"
          text={false}
          onClick={props.setViewMode(viewModeList.info)}
        >
          <Icon
            path={mdiInformationVariant}
            size={1.0}
            className="footerButton"
          />
        </IconButton>
        <IconButton
          size="big"
          text={false}
          onClick={props.setViewMode(viewModeList.member)}
        >
          <Icon path={mdiAccountGroup} size={1.0} className="footerButton" />
        </IconButton>
        <IconButton
          size="big"
          text={false}
          onClick={props.setViewMode(viewModeList.chat)}
        >
          <Icon path={mdiChat} size={1.0} className="footerButton" />
        </IconButton>
      </div>
      {/* <p>&copy; Team Nacomer 2020 All rights reserved.</p> */}
    </Card>
  );
}
