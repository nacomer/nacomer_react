import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';
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

export default function ChatPost(props) {
  const [comment, setComment] = useState('');
  const chatInputRef = useRef();

  const postComment = async () => {
    const chatService = new ChatService();
    const postChatRes = await chatService.postChat(
      props.loginUser,
      props.eventInfo.id,
      comment,
    );
    console.log(chatInputRef);
    if (postChatRes.status === 201) {
      chatInputRef.current.value = '';
      setComment('');
      props.getChat();
    }
  };
  const back = () => {
    props.setChatMode(false);
  };

  return (
    <div className="chatInput">
      {/* <TextField
        rounded
        className="chatInputText"
        placeholder="Type something"
        onChange={(e) => {
          setComment(e.value);
        }}
        ref={chatInputRef}
      /> */}
      <input
        className="chatInputText"
        placeholder="Type something"
        onChange={(e) => {
          setComment(e.value);
        }}
        ref={chatInputRef}
      />
      <Button rounded className="chatInputButton" onClick={postComment}>
        投稿
      </Button>
    </div>
  );
}
