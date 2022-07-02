import React from "react";
import "./register.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Link } from "react-router-dom";
import store from "../../redux/store";
import { RegRequest } from "../../redux";
import { useNavigate } from "react-router-dom";
import pic from "../../images/undraw_secure_login_pdn4.svg";

const Register = () => {
  let navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    let email = event.target[0].value;
    let username = event.target[1].value;
    let password = event.target[2].value;
    console.log("Email:", email, "Username:", username, "Password:", password);
    store.dispatch(RegRequest(email, username, password));
    let currStore = store.getState();
    console.log("Curr user", currStore.user.currentUser);
    if (currStore.user.currentUser) {
      document.getElementById("status").innerHTML =
        "Logging in as " + currStore.user.currentUser.username + "...";
      setTimeout(() => {
        navigate("../userhome");
      }, 2000);
    }
  };
  return (
    <div>
      <Header />
      <div className="register-container">
        <div className="left-register-container">
          <img className="image-register" src={pic} alt="" />
        </div>
        <div className="right-register-container">
          <form id="RegisterForm" onSubmit={(event) => handlesubmit(event)}>
            <h3>Sign up</h3>
            <label>Email: </label>
            <br />
            <input type="text" className="form-items" required />
            <br />
            <br />
            <label>Username: </label>
            <br />
            <input type="text" className="form-items" required />
            <br />
            <br />
            <label>Password: </label>
            <br />
            <input type="password" className="form-items" required />
            <br />
            <br />
            <input type="submit" className="form-items" />
          </form>
          <div id="status"></div>
          <br />
          <div>
            Already have an account? <Link to="/login">Login</Link> instead!
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
