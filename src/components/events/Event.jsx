import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
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
import EventService from '../../services/eventService';
import Chat from './Chat';
import '../../styles/event.css';

export default function Event(props) {
  const [eventInfo, setEventInfo] = useState({});
  const [participate, setParticipate] = useState(false);
  const [chatMode, setChatMode] = useState(false);
  useEffect(() => {
    // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
    const getEvent = async () => {
      const eventService = new EventService();
      // TODO: 表示のテストのため、seedされたeventIdを直接指定しています。
      // ここは適宜変更をお願いします。
      // let eventId = 'a68bcf67-0e75-47bb-b636-d39597febd36';
      const eventId = 'a6d0ae7d-3d51-46e4-8b98-72438e76b43e';
      const requestEventId = sessionStorage.getItem('eventid');
      if (requestEventId) {
        eventId = requestEventId;
        sessionStorage.removeItem('eventid');
      }
      const eventInfoRes = await eventService.getEventInfo(
        props.loginUser,
        eventId,
      );
      setEventInfo(eventInfoRes.data);
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
  }, []);

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
    // TODO:参加取り消しのAPIが必要
    setParticipate(false);
  };
  const enterChat = () => {
    setChatMode(true);
  };

  return (
    <>
      {chatMode ? (
        <Chat
          setChatMode={setChatMode}
          eventInfo={eventInfo}
          loginUser={props.loginUser}
        />
      ) : (
        <Card>
          {eventInfo && eventInfo.users ? (
            <>
              <div className="clearfix">
                <CardHeader
                  title={<H6>{eventInfo.subject}</H6>}
                  // action={
                  //   <IconButton>
                  //     <Icon path={mdiDotsVertical} size={1} />
                  //   </IconButton>
                  // }
                />
                <Card width={200} className="picture">
                  <CardMedia src="images/beaches-2.jpg" />
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
              </div>
              <div className="margin">
                <CardAction className="more">
                  <Card elevation={1} rounded>
                    <div className="padding">
                      主催者：
                      {eventInfo.ownerId}
                      <br />
                      <div>
                        参加者：
                        {/* {eventInfo.users.length}/{eventInfo.maxpart} */}
                      </div>
                      <div>
                        {eventInfo.users.map((data, idx) => (
                          <Avatar
                            className="avatar"
                            alt="Avatar"
                            src={data.picture}
                            key={idx}
                          />
                        ))}
                      </div>
                      <br />
                      <div>
                        集合場所：
                        {eventInfo.place}
                      </div>
                      <br />
                      開始時間：
                      {eventInfo.start}
                      <br />
                      終了時間：
                      {eventInfo.end}
                      <br />
                      <br />
                      {eventInfo.description}
                    </div>
                  </Card>
                </CardAction>
                {!participate ? (
                  <>
                    {eventInfo.maxpart === eventInfo.users.length ? (
                      <Button disabled>参加</Button>
                    ) : (
                      <Button onClick={clickParticipate}>参加</Button>
                    )}
                  </>
                ) : (
                  <>
                    <Button onClick={quitParticipate}>参加を取り消す</Button>
                    <Button onClick={enterChat}>チャットに参加する</Button>
                  </>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </Card>
      )}
    </>
  );
}
