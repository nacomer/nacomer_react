import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import 'moment/locale/ja';
import moment from 'moment';
import {
  Avatar,
  Card,
} from 'ui-neumorphism';
import {
  mdiAccountPlusOutline,
} from '@mdi/js';
import '../../styles/userlist.css';

export default function UserBox(props) {
  const clickBlankUser = () => {
    if(!props.participate){
      props.clickParticipate()
    }
  };

  return (
    <div className="userBox" onClick={clickBlankUser}>
      <div className="userCard">
        <Card elevation={2}>
          <div className="inCardUserAvatar">
            <Avatar
              className="userAvatar"
              bgColor="var(--warning)"
            >
              <Icon
                key={props.key}
                path={mdiAccountPlusOutline}
                size={1.0}
              />
            </Avatar>
            <div className="usernameBlank">エントリー待ち</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
