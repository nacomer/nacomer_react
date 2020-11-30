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
import EventOther from './EventOther';

export default function EventOthers(props) {
  const [otherEvent, setOtherEvent] = useState([]);

  useEffect(() => {
    const other = props.eventInfo.hobby.events.filter(
      (event) => event.id !== props.eventInfo.id,
    );
    setOtherEvent(other);
    console.log(other);
  }, []);

  return (
    <>
      <Divider />
      <div>
        <div>
          <p>他にも下記のイベントがあります</p>
          <br />
        </div>
        <div>
          {otherEvent.map((event, idx) => (
            <EventOther key={idx} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}
