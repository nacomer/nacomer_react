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

export default function EventOther(props) {
  return (
    <>
      <Divider />
      <h4>他にも下記のイベントがあります</h4>
      <Card elevation={1} rounded style={{ width: '-webkit-fill-available' }}>
        <div className="padding">
          <div>イベント名：</div>
          <div>参加者：</div>
          <div>集合場所：</div>
          <div>開始時間：</div>
        </div>
      </Card>
    </>
  );
}
