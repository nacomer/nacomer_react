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
import '../../styles/userlist.css';

export default function UserBox(props) {
  return (
    <div flat className="userBox">
      <div flat className="userCard">
        <Card rounded elevation={2}>
          <div className="inCardUserAvatar">
            <Avatar
              className="chatAvatar"
              alt="Avatar"
              src={props.user.picture}
            />
            <div className="username">{props.user.name}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
