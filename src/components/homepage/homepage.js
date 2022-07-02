import React from "react";
// import BtsCarousel from "./carousel";
import pic from "../../images/undraw_tasks_re_v2v4.svg";
import "./homepage.css";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { connect, useSelector } from "react-redux";
import { LogoutRequest } from "../../redux";
import Header from "../header/header";
import Footer from "../footer/footer";

const Homepage = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const currStore = store.getState();
  // console.log(user);
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="left-container">
          <img className="image" src={pic} alt="" />
        </div>
        <div className="right-container">
          <h1>Task Manager</h1>
          <br />
          <br />
          <h3>
            Plan out how you want to do work, add tasks, delete tasks, clear
            tasks and view your performance with this application!
          </h3>
          <br />
          <br />
          <h4>
            <i>
              “Let our advance worrying become advance thinking and planning.”
            </i>
            ~ Winston Churchill
          </h4>
          <br />
          <br />
          {!currStore.user.currentUser && (
            <div>
              <h4>
                Want to get started? <Link to="/register">Sign Up!</Link>
              </h4>
              <br />
              <br />
              <h4>
                Already have an account? <Link to="/login">Login!</Link>
              </h4>
            </div>
          )}
          {currStore.user.currentUser && (
            <div>
              <h4>
                You are currently signed in.{" "}
                <Link
                  onClick={() =>
                    store.dispatch(
                      LogoutRequest(currStore.user.currentUser.email)
                    )
                  }
                  to="/"
                >
                  Log out?
                </Link>
              </h4>
              <br />
              <br />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.login.currentUser,
//   };
// };

// export default connect(mapStateToProps)(Homepage);
export default Homepage;
