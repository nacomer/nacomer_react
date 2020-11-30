import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
import 'moment/locale/ja';
import moment from 'moment';
import { BsBoxArrowUpRight } from 'react-icons/bs';
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

export default function EventOther(props) {
  const start = moment(props.event.start);

  const clickDetails = () => {
    const url = '/?eventid=' + props.event.id;
    window.location.href = url;
  };

  return (
    <Card elevation={2}>
      <div onClick={clickDetails}>
        <Alert type="info" bordered icon={<BsBoxArrowUpRight />} border="left">
          <div>
            <div>
              イベント名：
              {props.event.subject}
            </div>
            <div>開始時間： {start.format('YYYY/MM/DD(dd) h:mm')}</div>
          </div>
        </Alert>
      </div>
    </Card>
  );
}
