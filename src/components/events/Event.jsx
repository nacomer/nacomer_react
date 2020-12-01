import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import moment from 'moment-timezone';
import useInterval from 'use-interval';
import { ViewModeList } from '../utils/Viewmode';
import {
  mdiDotsVertical,
  mdiShareVariant,
  mdiHeart,
  mdiInformationVariant,
  mdiAccount,
  mdiAccountVoice,
  mdiAccountGroup,
  mdiMapMarker,
  mdiClockOutline,
  mdiAccountPlus,
  mdiAccountPlusOutline,
  mdiAccountMinus,
  mdiChat,
  mdiLeadPencil,
} from '@mdi/js';
import {
  Alert,
  Avatar,
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
  Chip,
  Card,
  Fab,
  H6,
  H5,
  H4,
} from 'ui-neumorphism';

import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import EventService from '../../services/eventService';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PeopleIcon from '@material-ui/icons/People';
import Chat from './Chat';
import UserList from './UserList';
import EventOthers from './EventOthers';
import EventTitle from './EventTitle';
import EventDate from './EventDate';
import EventPlace from './EventPlace';
import EventDetail from './EventDetail';

import '../../styles/event.css';

export default function Event(props) {
  const [eventInfo, setEventInfo] = useState({});
  const [participate, setParticipate] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [chatMode, setChatMode] = useState(false);
  const [eventId, setEventId] = useState('');
  const start = moment(eventInfo.start).tz('Asia/Tokyo');
  const end = moment(eventInfo.end).tz('Asia/Tokyo');

  const getEvent = async () => {
    const eventService = new EventService();

    // TODO: 表示のテストのため、1番目のeventIdを取得しています
    const sessionSavedId = sessionStorage.getItem('eventid');
    let eid;
    if (sessionSavedId) {
      eid = sessionSavedId;
      sessionStorage.removeItem('eventid');
    } else {
      eid = eventId;
      if (!eid) {
        const ids = await eventService.getRandomEvent(props.loginUser);
        eid = ids.data[0].id;
      }
    }
    setEventId(eid);
    const eventInfoRes = await eventService.getEventInfo(props.loginUser, eid);
    setEventInfo(eventInfoRes.data);
    // ownerNameの設定
    const owner = eventInfoRes.data.users.filter(
      (user) => user.id === eventInfoRes.data.ownerId,
    );
    setOwnerName(owner[0].name);
    // 既に参加済みの場合は参加済みstateをtrueに設定する。
    if (
      eventInfoRes.data.users &&
      eventInfoRes.data.users.find(
        (user) => user.googleId === props.loginUser.googleId,
      )
    ) {
      setParticipate(true);
      props.setChatEnable(true);
    }
  };

  useEffect(() => {
    // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
    getEvent();
  }, []);

  useInterval(() => {
    getEvent();
  }, 30000);

  const clickParticipate = () => {
    const participateEvent = async () => {
      const eventService = new EventService();
      const participantsRes = await eventService.participateEvent(
        props.loginUser,
        eventInfo.id,
      );
      if (participantsRes.status === 201) {
        setParticipate(true);
        props.setChatEnable(true);
        getEvent();
      }
    };
    participateEvent();
  };

  const quitParticipate = () => {
    const unparticipateEvent = async () => {
      const eventService = new EventService();
      const unparticipantsRes = await eventService.unparticipateEvent(
        props.loginUser,
        eventInfo.id,
      );
      if (unparticipantsRes.status === 204) {
        setParticipate(false);
        props.setChatEnable(false);
        getEvent();
      }
    };
    unparticipateEvent();
  };

  const enterChat = () => {
    setChatMode(true);
  };

  return (
    <Card rounded elevation={4} className="eventCard">
      {props.viewMode === ViewModeList.member ? (
        <UserList info={eventInfo} />
      ) : props.viewMode === ViewModeList.chat ? (
        <Chat
          setChatMode={setChatMode}
          eventInfo={eventInfo}
          loginUser={props.loginUser}
        />
      ) : (
        <div className="eventWrapper">
          {eventInfo && eventInfo.users ? (
            <>
              <CardMedia
                dark
                src={eventInfo.hobby.picture}
                style={{ 'background-size': 'contain' }}
              />
              <CardContent className="EventContent">
                <div className="eventTitle">
                  <EventTitle
                    eventInfo={eventInfo}
                    clickParticipate={clickParticipate}
                    quitParticipate={quitParticipate}
                    participate={participate}
                  />
                </div>
                <div className="eventInfo">
                  <div className="dateAndPlace">
                    <EventDate eventInfo={eventInfo} />
                    <EventPlace eventInfo={eventInfo} />
                  </div>
                  <div className="eventDetail">
                    <EventDetail eventInfo={eventInfo} />
                  </div>
                  {!participate &&
                  eventInfo.maxpart === eventInfo.users.length ? (
                    <div>
                      <EventOthers eventInfo={eventInfo} />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </CardContent>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </Card>
  );
}
