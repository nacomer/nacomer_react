import React, { useEffect, useState } from 'react';
import { mdiMapMarker, mdiMapMarkerRadiusOutline } from '@mdi/js';
import MapIcon from '@material-ui/icons/Map';
import { Card, IconButton} from 'ui-neumorphism';
import Icon from '@mdi/react';

export default function EventPlace(props) {
  const [place, setPlace] = useState('');
  useEffect(() => {
    if (props.eventInfo.place) {
      setPlace(props.eventInfo.place);
    }
  }, []);

  const openGoogleMap = () => {
    location.href =
      'https://www.google.com/maps/search/?api=1&query=' + place;
  };


  return (
    <Card elevation={2} className="eventPlaceCard">
      <div className="smallCardData">
        <div className="smallCardTitle">
          <IconButton
            rounded
            size="small"
            text={false}
            onClick={openGoogleMap}
            className="snsButton"
          >
            <MapIcon
              size="small"
              className="inButtonNormal"
            />
          </IconButton>
          <p className="smallCardTitleText">場所</p>
        </div>
        <div className="smallCardInfo">
          <p className="dateText">{place}</p>
        </div>
      </div>
    </Card>
  );
}
