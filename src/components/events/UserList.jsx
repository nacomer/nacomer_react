import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import {
  Alert,
  Avatar,
  ProgressCircular,
  CardContent,
  IconButton,
  CardHeader,
  CardAction,
  CardMedia,
  Subtitle1,
  Subtitle2,
  Divider,
  Spacer,
  Button,
  Body2,
  Card,
  Fab,
  H6,
  H5,
  H4,
  TextField,
} from 'ui-neumorphism';
import useInterval from 'use-interval';
import ChatService from '../../services/chatService';
import UserBox from './UserBox';
import UserBoxBlank from './UserBoxBlank';
import MyChatBox from './MyChatBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../styles/chat.css';
import '../../styles/userlist.css';

export default function UserList(props) {
  return (
    <div className="userListWrapper">
      {props.info.users ? (
        <div className="userCardWrapper">
          {props.info.users.map((user, idx) => (
            <UserBox key={user.id} user={user} />
          ))}
          {(() => {
            let ret = [];
            for (let i = 0; i < props.info.maxpart-props.info.users.length; i++) {
              ret.push(<UserBoxBlank key={i} clickParticipate={props.clickParticipate} participate={props.participate}/>)
            }
          return (<div>{ret}</div>);
          })()}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
