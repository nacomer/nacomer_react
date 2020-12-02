import React, { useEffect, useState } from 'react';
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
import Icon from '@mdi/react';
import { mdiLeadPencil } from '@mdi/js';

export default function EventDetail(props) {
  return (
    <Card elevation={2} className="eventDetailCard">
      <div class="eventDetailHeader">
        <Icon path={mdiLeadPencil} size={1.0} className="eventIcon" />
        <p className="smallCardTitleText">詳細</p>
      </div>
      <div class="eventDetailBody">
        <p>{props.eventInfo.description}</p>
      </div>
    </Card>
  );
}
