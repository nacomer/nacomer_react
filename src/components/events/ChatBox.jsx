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

export default function ChatBox(props) {
  return (
    <Card flat className="chatBox">
      <Card flat>
        <Avatar className="avatar" alt="Avatar" src={props.chat.user.picture} />
      </Card>

      <Card flat>
        <Card flat>
          <h5>{props.chat.user.name}</h5>
          <h6>{moment(props.chat.date).fromNow()}</h6>
        </Card>
        <Card inset className="chatCard">
          {props.chat.comment}
        </Card>
      </Card>
    </Card>
  );
}
