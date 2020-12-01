import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
import 'moment/locale/ja';
import moment from 'moment';
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
import '../../styles/chat.css';

export default function MyChatBox(props) {
  return (
    <div flat className="chatBox">
      <div flat className="contentCard">
        <div flat className="profileCard">
        <p align="right">
          <span className="userNameText">{props.chat.user.name}</span>
          <span className="uploadDateText">{moment(props.chat.date).fromNow()}</span>
          </p>
        </div>
        <Card inset className="chatCard">
          {props.chat.comment}
        </Card>
      </div>
      <div flat className="avatarCard">
        <Card rounded elevation={2}>
          <div className="inCardAvatar">
            <Avatar
              className="chatAvatar"
              alt="Avatar"
              src={props.chat.user.picture}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
