import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import 'moment/locale/ja';
import moment from 'moment';
import {
  mdiDotsVertical,
  mdiShareVariant,
  mdiHeart,
  mdiInformationVariant,
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
import EventService from '../../services/eventService';
import Chat from './Chat';
import EventOthers from './EventOthers';
import '../../styles/event.css';

export default function Event(props) {
  const [eventInfo, setEventInfo] = useState({});
  const [participate, setParticipate] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [chatMode, setChatMode] = useState(false);
  const start = moment(eventInfo.start);
  const end = moment(eventInfo.end);
  useEffect(() => {
    // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
    const getEvent = async () => {
      const eventService = new EventService();

      // TODO: 表示のテストのため、1番目のeventIdを取得しています
      const sessionSavedId = sessionStorage.getItem('eventid');
      let eventId;
      if (sessionSavedId) {
        eventId = sessionSavedId;
      } else {
        const ids = await eventService.getRandomEvent(props.loginUser);
        eventId = ids.data[0].id;
      }
      const eventInfoRes = await eventService.getEventInfo(
        props.loginUser,
        eventId,
      );
      setEventInfo(eventInfoRes.data);

      // // TODO: 表示のテストのため、1番目のeventIdを取得しています
      // const ids = await eventService.getRandomEvent(props.loginUser);
      // const eventId = ids.data[0].id;
      // const eventInfoRes = await eventService.getEventInfo(
      //   props.loginUser,
      //   eventId,
      // );
      // setEventInfo(eventInfoRes.data);
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
    getEvent();
  }, [participate]);

  const clickParticipate = () => {
    const participateEvent = async () => {
      const eventService = new EventService();
      const participantsRes = await eventService.participateEvent(
        props.loginUser,
        eventInfo.id,
      );
      if (participantsRes.status === 201) {
        setParticipate(true);
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
      start.format('YYYYMMDD[T]hhmmss') + '/' + end.format('YYYYMMDD[T]hhmmss');
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
      {chatMode ? (
        <Chat
          setChatMode={setChatMode}
          eventInfo={eventInfo}
          loginUser={props.loginUser}
        />
      ) : (
        <>
          {eventInfo && eventInfo.users ? (
            <>
              <div className="clearfix">
                {/* <CardHeader title={<H6>{eventInfo.subject}</H6>} /> */}
                <Alert
                  type="info"
                  bordered
                  icon={<Icon path={mdiInformationVariant} size={1} />}
                  border="left"
                >
                  <div className="eventTitle">
                    <p>{eventInfo.subject}</p>
                    <div className="snsIcons">
                      <IconButton rounded onClick={openTwitterLink}>
                        <TwitterIcon className="inButtonNormal" />
                      </IconButton>
                      <IconButton rounded onClick={openFacebookLink}>
                        <FacebookIcon className="inButtonNormal" />
                      </IconButton>
                      <IconButton rounded onClick={openCalendar}>
                        <EventIcon className="inButtonNormal" />
                      </IconButton>
                    </div>
                  </div>
                </Alert>
                <div>
                  <Card width={200} maxHeight={160} className="picture">
                    <CardMedia dark src="images/beaches-2.jpg" />
                  </Card>
                  <CardAction>
                    <Card flat className="eventbox">
                      {eventInfo.properties.map((data, idx) => (
                        <Chip className="propChip" key={idx}>
                          {data.name}
                        </Chip>
                      ))}
                    </Card>
                  </CardAction>
                  <div className="participate">
                    {!participate ? (
                      <>
                        {eventInfo.maxpart === eventInfo.users.length ? (
                          <Button disabled>参加</Button>
                        ) : (
                          <Button
                            bordered
                            onClick={clickParticipate}
                            className="partButton"
                          >
                            <p className="inButton">参加</p>
                          </Button>
                        )}
                      </>
                    ) : (
                      <>
                        <Button onClick={quitParticipate}>
                          <p className="inButton">参加取消</p>
                        </Button>
                        <Button onClick={enterChat}>
                          <p className="inButton">トーク画面</p>
                        </Button>
                      </>
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
                      主催者：
                      {ownerName}
                      <br />
                      <div>
                        参加者：
                        {eventInfo.users.length}/{eventInfo.maxpart}
                      </div>
                      <div className="avatarlist">
                        {eventInfo.users.map((data, idx) => (
                          <Avatar
                            className="avatar"
                            alt="Avatar"
                            src={data.picture}
                            key={idx}
                          />
                        ))}
                      </div>
                      <Divider />
                      <div>
                        集合場所：
                        {eventInfo.place}
                      </div>
                      <br />
                      開始時間：
                      {start.format('YYYY/MM/DD(dd) h:mm')}
                      <br />
                      終了時間：
                      {end.format('YYYY/MM/DD(dd) h:mm')}
                      <br />
                      <br />
                      {eventInfo.description}
                    </div>
                  </Card>
                </CardAction>
              </div>
              <div>
                {eventInfo.maxpart === eventInfo.users.length ? (
                  <EventOthers eventInfo={eventInfo} />
                ) : eventInfo != {} ? (
                  <EventOthers eventInfo={eventInfo} />
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </Card>
  );
}
