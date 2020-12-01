import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import SendIcon from '@material-ui/icons/Send';
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
    if (postChatRes.status === 201) {
      chatInputRef.current.value = '';
      setComment('');
      props.getChat();
      props.scrollToBottom();
    }
  };

  return (
    <Card className="chatInput">
      <input
        type="text"
        className="chatInputText"
        placeholder="メッセージを入力..."
        onChange={(e) => {
          setComment(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key == 'Enter' && comment) {
            postComment();
          }
        }}
        ref={chatInputRef}
      />
      {comment ? (
        <Button rounded className="chatInputButton" onClick={postComment}>
          <SendIcon className="inButton" />
        </Button>
      ) : (
        <Button disabled rounded className="chatInputButton">
          <SendIcon className="inButton" />
        </Button>
      )}
    </Card>
  );
}
