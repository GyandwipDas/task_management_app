import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import store from "../../redux/store";
import { LogoutRequest } from "../../redux";

const Header = () => {
  let currstore = store.getState();

  return (
    <div className="header">
      <div className="left-header-container">
        <Link className="header-links" to="/">
          Task Manager
        </Link>
      </div>
      <div className="right-header-container">
        {currstore.user.currentUser !== "" && (
          <Link className="header-links" to="/userhome">
            Home
          </Link>
        )}
        {currstore.user.currentUser !== "" && (
          <Link
            className="header-links"
            onClick={() =>
              store.dispatch(LogoutRequest(currstore.user.currentUser.email))
            }
            to="/"
          >
            Logout
          </Link>
        )}
        {currstore.user.currentUser === "" && (
          <Link className="header-links" to="/login">
            Login/Register
          </Link>
        )}
        {/* {store.getState().user.currentUser !== "" && (
          <Link className="header-links" to="/login">
            Logout
          </Link>
        )}
        {currstore.user.currentUser === "" && (
          <Link className="header-links" to="/login">
            Login
          </Link>
        )} */}
        <Link className="header-links" to="/about">
          About us
        </Link>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser,
//   };
// };

export default Header;
