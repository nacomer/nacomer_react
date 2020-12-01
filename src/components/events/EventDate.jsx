import React, { useEffect, useState } from 'react';
import { mdiClockOutline } from '@mdi/js';
import { Card, IconButton } from 'ui-neumorphism';
import EventIcon from '@material-ui/icons/Event';
import Icon from '@mdi/react';
import moment from 'moment-timezone';

export default function EventDate(props) {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  useEffect(() => {
    if (props.eventInfo.start && props.eventInfo.end) {
      setStartDate(
        moment(props.eventInfo.start).tz('Asia/Tokyo').format('MM/DD(dd)'),
      );
      setEndDate(
        moment(props.eventInfo.end).tz('Asia/Tokyo').format('MM/DD(dd)'),
      );
      setStartTime(
        moment(props.eventInfo.start).tz('Asia/Tokyo').format('HH:mm'),
      );
      setEndTime(moment(props.eventInfo.end).tz('Asia/Tokyo').format('HH:mm'));
    }
  }, []);

  const openCalendar = () => {
    const text = props.eventInfo.subject;
    const dates =
      moment(props.eventInfo.start)
        .tz('Asia/Tokyo')
        .format('YYYYMMDD[T]HHmmss') +
      '/' +
      moment(props.eventInfo.end).tz('Asia/Tokyo').format('YYYYMMDD[T]HHmmss');
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
    <Card elevation={2} className="eventDateCard">
      <div className="smallCardData">
        <div className="smallCardTitle">
          <IconButton
            rounded
            size="small"
            text={false}
            onClick={openCalendar}
            className="snsButton"
          >
            <EventIcon fontSize="small" className="eventIcon" />
          </IconButton>
          <p className="smallCardTitleText">日時</p>
        </div>
        {startDate === endDate ? (
          <div className="smallCardInfo">
            <p className="dateText">{startDate}</p>
            <p className="timeText">
              {startTime} - {endTime}
            </p>
          </div>
        ) : (
          <div className="smallCardInfo">
            <p className="timeText">
              {startDate}
              {startTime}
            </p>
            <p className="timeText">
              {'  - '}
              {endDate}
              {endTime}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
