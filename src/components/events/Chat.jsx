import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
import {
  Alert,
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
} from 'ui-neumorphism';
import EventService from '../../services/eventService';

export default function Chat(props) {
  const back = () => {
    props.setChatMode(false);
  };
  return (
    <div>
      <p>チャット画面</p>
      <Button onClick={back}>戻る</Button>
    </div>
  );
}
