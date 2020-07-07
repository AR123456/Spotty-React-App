import React, { Fragment, useContext } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ShareContext from "../../context/share/shareContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const shareContext = useContext(ShareContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearPlaylists } = shareContext;

  const onLogout = () => {
    logout();
    clearPlaylists();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Playlist Share",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
