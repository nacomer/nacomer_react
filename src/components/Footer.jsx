import React from 'react';
import { Card, IconButton } from 'ui-neumorphism';
import Icon from '@mdi/react';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import '../styles/footer.css';

export default function Footer() {
  return (
    <Card elevation={1} className="footer">
      <p>&copy; Team Nacomer 2020 All rights reserved.</p>
    </Card>
  );
}
