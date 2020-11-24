import React from "react";
import PropTypes from "prop-types";
import logo from "../image/logo.png";
import "../styles/header.css";

const { history } = window;

export default function Header(props) {
  return (
    <div
      className="header"
      tabIndex="0"
      role="button"
      onClick={() => {
        history.pushState(null, null, "");
        props.setViewMode("List");
      }}
      aria-hidden="true"
    >
      <img src={logo} alt="logo" className="logo" />
      <div className="catchCopy">~ Your Gate of New Hobby ~</div>
    </div>
  );
}

Header.propTypes = {
  setViewMode: PropTypes.func.isRequired
};
