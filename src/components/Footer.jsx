import React from 'react';
import logo from '../image/logo.png';
import twitter from '../image/twitter.png';
import facebook from '../image/facebook.png';
import instagram from '../image/instagram.png';
import '../styles/footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" className="logo" />
      <div className="name">
        |  Takumi Kataoka  |  Masahiro Sakai  |  Tadashi Isano  |  Kohei Doihara  |  Ryoma Aoki  |
      </div>
      <img src={twitter} className="sns" alt="twitter" />
      <img src={facebook} className="sns" alt="facebook" />
      <img src={instagram} className="sns" alt="instagram" />
    </div>
  );
}
