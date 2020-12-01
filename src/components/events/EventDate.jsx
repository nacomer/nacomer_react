import React, { useEffect, useState } from 'react';
import { mdiClockOutline } from '@mdi/js';
import { Card } from 'ui-neumorphism';
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

  const openGoogleMap = () => {
    location.href =
      'https://www.google.com/maps/search/?api=1&query=' + eventInfo.place;
  };

  return (
    <Card elevation={2} className="eventDateCard">
      <div className="smallCardData">
        <div className="smallCardTitle">
          <Icon path={mdiClockOutline} size={1.2} color="blue" />
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
