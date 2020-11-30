import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiDotsVertical, mdiShareVariant, mdiHeart } from '@mdi/js';
import {
  Alert,
  Avatar,
  ProgressCircular,
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
  TextField,
} from 'ui-neumorphism';
import useInterval from 'use-interval';
import ChatService from '../../services/chatService';
import '../../styles/chat.css';
import ChatPost from './ChatPost';

export default function Chat(props) {
  const [chatList, setChatList] = useState([]);

  // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
  const getChat = async () => {
    const chatService = new ChatService();
    const chatListRes = await chatService.getChatList(
      props.loginUser,
      props.eventInfo.id,
    );
    console.log(chatListRes);
    setChatList(chatListRes.data);
  };
  useEffect(() => {
    getChat();
  }, []);
  // 30秒に1回チャットの情報を取得する。
  useInterval(() => {
    getChat();
  }, 30000);

  const back = () => {
    props.setChatMode(false);
  };

  return (
    <div>
      {chatList.map((data, idx) => (
        <Card inset className="chatCard" key={idx}>
          <Avatar
            className="avatar"
            alt="Avatar"
            src={data.user.picture}
            key={idx}
          />
          {data.user.name}
          <br />
          {data.comment}
        </Card>
      ))}
      <ChatPost
        getChat={getChat}
        loginUser={props.loginUser}
        eventInfo={props.eventInfo}
      />
      <div>
        <Button onClick={back}>←</Button>
      </div>
    </div>
  );
}
