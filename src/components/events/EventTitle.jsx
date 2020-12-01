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
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EventIcon from '@material-ui/icons/Event';

export default function EventTitle(props) {
  const openTwitterLink = () => {
    const text = props.eventInfo.subject + 'に参加しよう';
    const url = 'http://www.nacomer.tk/?eventid=' + props.eventInfo.id;
    const hashtag = 'nacomer';
    const via = 'nacomer';
    const targetUri =
      'https://twitter.com/intent/tweet?text=' +
      text +
      '&url=' +
      url +
      '&hashtag=' +
      hashtag +
      '&via=' +
      via;
    location.href = targetUri;
  };

  const openFacebookLink = () => {
    const url = 'http://www.nacomer.tk/?eventid=' + props.eventInfo.id;
    const targetUri = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    location.href = targetUri;
  };

  const openCalendar = () => {
    const text = props.eventInfo.subject;
    const dates =
      start.format('YYYYMMDD[T]HHmmss') + '/' + end.format('YYYYMMDD[T]HHmmss');
    const targetUri =
      'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
      text +
      '&dates=' +
      dates +
      '&location=' +
      props.eventInfo.place;
    location.href = targetUri;
  };

  return (
    <div>
      <p>{props.eventInfo.subject}</p>
      <p>Properties</p>
      <div className="snsIcons">
        <IconButton
          rounded
          size="small"
          text={false}
          onClick={openTwitterLink}
          className="snsButton"
        >
          <TwitterIcon fontSize="small" className="inButtonNormal" />
        </IconButton>
        <IconButton
          rounded
          size="small"
          text={false}
          onClick={openFacebookLink}
          className="snsButton"
        >
          <FacebookIcon fontSize="small" className="inButtonNormal" />
        </IconButton>
        <IconButton
          rounded
          size="small"
          text={false}
          onClick={openCalendar}
          className="snsButton"
        >
          <EventIcon fontSize="small" className="inButtonNormal" />
        </IconButton>
      </div>
    </div>
  );
}
