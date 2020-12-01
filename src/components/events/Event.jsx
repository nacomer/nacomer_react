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
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PlaceIcon from '@material-ui/icons/Place';
import EventService from '../../services/eventService';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import PeopleIcon from '@material-ui/icons/People';
import Chat from './Chat';
import UserList from './UserList';
import EventOthers from './EventOthers';
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
        getEvent();
      }
    };
    unparticipateEvent();
  };

  const enterChat = () => {
    setChatMode(true);
  };

  const openTwitterLink = () => {
    const text = eventInfo.subject + 'に参加しよう';
    const url = 'http://www.nacomer.tk/?eventid=' + eventInfo.id;
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
    const url = 'http://www.nacomer.tk/?eventid=' + eventInfo.id;
    const targetUri = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    location.href = targetUri;
  };

  const openCalendar = () => {
    const text = eventInfo.subject;
    const dates =
      start.format('YYYYMMDD[T]HHmmss') + '/' + end.format('YYYYMMDD[T]HHmmss');
    const targetUri =
      'https://www.google.com/calendar/render?action=TEMPLATE&text=' +
      text +
      '&dates=' +
      dates +
      '&location=' +
      eventInfo.place;
    location.href = targetUri;
  };

  return (
    <Card elevation={1} style={{ height: 'fit-content' }}>
      <Alert
        type="info"
        bordered
        icon={<Icon path={mdiInformationVariant} size={1} />}
        border="left"
      >
        <div className="eventTitle">
          <p className="eventSubject">{eventInfo.subject}</p>
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
      </Alert>
      {props.viewMode === ViewModeList.info ? (
        <UserList info={eventInfo}/>
      ) : (
        props.viewMode === ViewModeList.chat ? (
          <Chat
            setChatMode={setChatMode}
            eventInfo={eventInfo}
            loginUser={props.loginUser}
          />
        ) : (
          <div className="eventWrapper">
            {eventInfo && eventInfo.users ? (
              <>
                <div className="clearfix">
                  {/* <CardHeader title={<H6>{eventInfo.subject}</H6>} /> */}
                  <div className="eventInfo">
                    <Card width={200} maxHeight={160} className="picture">
                      <CardMedia src={eventInfo.hobby.picture} />
                    </Card>
                    <CardAction>
                      <Card flat className="eventbox">
                        {eventInfo.properties.map((data, idx) => (
                          <Chip active className="propChip" key={idx}>
                            {data.name}
                          </Chip>
                        ))}
                      </Card>
                    </CardAction>
                    <div className="participate">
                      {!participate ? (
                        <>
                          {eventInfo.maxpart === eventInfo.users.length ? (
                            <Button disabled>
                              <div className="inEventButton">
                                <Icon path={mdiAccountPlus} size={1.0} />
                                <p>参加</p>
                              </div>
                            </Button>
                          ) : (
                            <Button
                              bordered
                              onClick={clickParticipate}
                              className="partButton"
                            >
                              <div className="inEventButton">
                                <Icon path={mdiAccountPlus} size={1.0} />
                                <p>参加</p>
                              </div>
                            </Button>
                          )}
                        </>
                      ) : (
                        <div>
                          <div className="multiLineButton">
                            <Button onClick={quitParticipate}>
                              <div className="inCancelButton">
                                <Icon path={mdiAccountMinus} size={0.8} />
                                <p>参加取消</p>
                              </div>
                            </Button>
                          </div>
                          <div className="multiLineButton">
                            <Button onClick={enterChat}>
                              <div className="inEventButton">
                                <Icon path={mdiChat} size={0.8} />
                                <p>トーク画面</p>
                              </div>
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="margin">
                  <CardAction className="more">
                    <Card
                      inset
                      elevation={1}
                      rounded
                      style={{ width: '-webkit-fill-available' }}
                    >
                      <div className="padding">
                        <div className="infoBox">
                          <div className="infoIcon">
                            <Icon path={mdiAccountVoice} size={1.0} />
                          </div>
                          <div className="infoDetailBox">
                            <p className="infoDetail">{ownerName}</p>
                          </div>
                        </div>
                        <br />
                        <div className="infoBox">
                          <div className="infoIcon">
                            <Icon path={mdiAccountGroup} size={1.0} />
                          </div>
                          <div className="infoDetailBox">
                            {/* {eventInfo.users.length}/{eventInfo.maxpart} */}
                            <div className="avatarlist">
                              {eventInfo.users.map((data, idx) => (
                                <Avatar
                                  className="avatar"
                                  alt="Avatar"
                                  src={data.picture}
                                  key={idx}
                                />
                              ))}
                              {eventInfo.maxpart - eventInfo.users.length > 0 ? (
                                [
                                  ...Array(
                                    eventInfo.maxpart - eventInfo.users.length,
                                  ).keys(),
                                ].map((key) => {
                                  return (
                                    <Avatar
                                      className="avatar"
                                      bgColor="var(--warning)"
                                    >
                                      <Icon
                                        key={key}
                                        path={mdiAccountPlusOutline}
                                        size={1.0}
                                      />
                                    </Avatar>
                                  );
                                })
                              ) : (
                                <></>
                              )}
                            </div>
                          </div>
                        </div>
                        <Divider className="infoDivide" />
                        <div className="infoBox">
                          <div className="infoIcon">
                            <Icon path={mdiMapMarker} size={1.0} />
                          </div>
                          <div className="infoDetailBox">
                            <p className="infoDetail">{eventInfo.place}</p>
                          </div>
                        </div>
                        <br />
                        <div className="infoBox">
                          <div className="infoIcon">
                            <Icon path={mdiClockOutline} size={1.0} />
                          </div>
                          <div className="infoDetailBox">
                            <div className="infoDetail">
                              {start.format('YYYY/MM/DD(dd) HH:mm')}
                            </div>
                            <div className="infoDetail">～</div>
                            <div className="infoDetail">
                              {end.format('YYYY/MM/DD(dd) HH:mm')}
                            </div>
                          </div>
                        </div>
                        <Divider className="infoDivide" />
                        <div className="infoBox lastInfoBox">
                          <div className="infoIcon">
                            <Icon path={mdiLeadPencil} size={1.0} />
                          </div>
                          <div className="infoDetailBox">
                            <p className="infoDetail">{eventInfo.description}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CardAction>
                </div>
                <div>
                  {eventInfo.maxpart === eventInfo.users.length ? (
                    <EventOthers eventInfo={eventInfo} />
                  ) : eventInfo != {} ? (
                    <></>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        )
        )      
      }
      
    </Card>
  );
}
