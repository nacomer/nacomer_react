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
import MyChatBox from './MyChatBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../styles/chat.css';
import '../../styles/userlist.css';

export default function UserList(props) {

  return (
    <div className="userListWrapper">
      <div className="userListMessage">
        参加者
      </div>
      {props.info.users ? (
        <div className="cardWrapper">
          {props.info.users.map((user, idx) =>
              <UserBox key={idx} user={user} />
          )}
        </div>
      ) : (<></>)
      }
    </div>
  );
}
