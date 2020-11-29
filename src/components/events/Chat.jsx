import React, { useEffect, useState, createRef } from 'react';
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
  Card,
  Fab,
  H6,
  H5,
  H4,
  TextField,
} from 'ui-neumorphism';
import ChatService from '../../services/chatService';
import '../../styles/chat.css';

export default function Chat(props) {
  const [chatList, setChatList] = useState([]);
  const [comment, setComment] = useState('');
  const chatInputRef = createRef();
  useEffect(() => {
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
    getChat();
  }, []);

  const postComment = async () => {
    const chatService = new ChatService();
    const postChatRes = await chatService.postChat(
      props.loginUser,
      props.eventInfo.id,
      comment,
    );
    console.log(chatInputRef.current.value);
    if (postChatRes.status === 201) {
      chatInputRef.current.value = '';
      setComment('');
    }
  };
  const back = () => {
    props.setChatMode(false);
  };

  return (
    <div>
      <p>チャット画面</p>
      {chatList.map((data, idx) => (
        <Card className="chatCard" key={idx}>
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
      <TextField
        label="Text"
        className="my-3"
        onChange={(e) => {
          setComment(e.value);
        }}
        ref={chatInputRef}
        value="teeeest"
      />
      <Button onClick={postComment}>投稿</Button>
      <Button onClick={back}>戻る</Button>
    </div>
  );
}
