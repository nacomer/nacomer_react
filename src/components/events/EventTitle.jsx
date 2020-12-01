import React, { useEffect, useState } from 'react';
import Icon from '@mdi/react';
import { mdiTrophyAward, mdiAccountPlus, mdiAccountMinus } from '@mdi/js';
import {
  Alert,
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
  Chip,
  Fab,
  H6,
  H5,
  H4,
} from 'ui-neumorphism';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function EventTitle(props) {
  const openTwitterLink = () => {
    const text = props.eventInfo.subject + 'に参加しよう';
    const url = 'http://www.nacomer.tk/?eventid=' + props.eventInfo.id;
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
    const url = 'http://www.nacomer.tk/?eventid=' + props.eventInfo.id;
    const targetUri = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
    location.href = targetUri;
  };

  return (
    <div class="eventTitleBlock">
      <div className="subjectBlock">
        <Icon
          path={mdiTrophyAward}
          size={1.2}
          color="orange"
          className="titleIcon"
        />
        <p>{props.eventInfo.subject}</p>
      </div>
      <div className="eventProps">
        {props.eventInfo.properties.map((data, idx) => (
          <Chip active className="propChip" key={idx}>
            <p className="chipText">{data.name}</p>
          </Chip>
        ))}
      </div>
      <div className="buttonSnsBlock">
        <div className="participate">
          {!props.participate ? (
            <>
              {props.eventInfo.maxpart === props.eventInfo.users.length ? (
                <Button disabled>
                  <div className="inEventButton">
                    <Icon path={mdiAccountPlus} size={1.0} />
                    <p>参加</p>
                  </div>
                </Button>
              ) : (
                <Button
                  bordered
                  onClick={props.clickParticipate}
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
                <Button onClick={props.quitParticipate}>
                  <div className="inCancelButton">
                    <Icon path={mdiAccountMinus} size={0.8} />
                    <p>参加取消</p>
                  </div>
                </Button>
              </div>
            </div>
          )}
        </div>
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
        </div>
      </div>
    </div>
  );
}
