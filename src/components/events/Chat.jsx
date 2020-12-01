import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
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
import ChatPost from './ChatPost';
import ChatBox from './ChatBox';
import MyChatBox from './MyChatBox';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import '../../styles/chat.css';

export default function Chat(props) {
  const [chatList, setChatList] = useState([]);
  const chatWrapper = useRef();

  const scrollToBottom = () => {
    console.log('called!');
    const scroll =
      chatWrapper.current.scrollHeight - chatWrapper.current.clientHeight;
    chatWrapper.current.scrollTo(0, scroll);
  };

  // cookieに保存されているtokenIdが有効な場合はcookieに含まれる情報をstateにセットする
  const getChat = async () => {
    console.log(props.eventInfo);
    const chatService = new ChatService();
    const chatListRes = await chatService.getChatList(
      props.loginUser,
      props.eventInfo.id,
    );
    setChatList(chatListRes.data);
  };
  useEffect(() => {
    getChat();
    scrollToBottom();
  }, []);
  // 30秒に1回チャットの情報を取得する。
  useInterval(() => {
    getChat();
  }, 5000);

  const back = () => {
    props.setChatMode(false);
  };

  return (
    <>
      <div className="chatWrapper" ref={chatWrapper}>
        {chatList.map((chat) =>
          chat.user.googleId == props.loginUser.googleId ? (
            <MyChatBox key={chat.id} chat={chat} />
          ) : (
            <ChatBox key={chat.id} chat={chat} />
          ),
        )}
      </div>
      <div>
        <ChatPost
          getChat={getChat}
          loginUser={props.loginUser}
          eventInfo={props.eventInfo}
          scrollToBottom={scrollToBottom}
        />
      </div>
    </>
  );
}
