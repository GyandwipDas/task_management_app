import React from "react";
import "./login.css";
import store from "../../redux/store";
import Header from "../header/header";
import Footer from "../footer/footer";
import { LoginRequest } from "../../redux";
import { useNavigate, Link } from "react-router-dom";
import pic from "../../images/undraw_mobile_login_re_9ntv.svg";

const Login = () => {
  let navigate = useNavigate();
  // const user = useSelector((state) => state.user.numOfUsers);
  let currstore = store.getState();
  // console.log(user);
  const handlesubmit = (event) => {
    event.preventDefault();
    let email = event.target[0].value;
    let password = event.target[1].value;
    console.log("Email:", email, "Password:", password);
    store.dispatch(LoginRequest(email, password));
    // if(user.currentUser)
    currstore = store.getState();
    console.log("Curr user", currstore);
    if (currstore.user.currentUser) {
      document.getElementById("status").innerHTML =
        "Logging in as " + currstore.user.currentUser.username + "...";
      setTimeout(() => {
        navigate("../userhome");
      }, 2000);
    }
  };
  return (
    <div>
      <Header />
      <div className="login-container">
        <div className="left-login-container">
          <form id="LoginForm" onSubmit={(event) => handlesubmit(event)}>
            <h3>Login</h3>
            <label>Email: </label>
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
            Don't have an account? <Link to="/register">Register</Link> instead!
          </div>
        </div>
        <div className="right-login-container">
          <img className="image-login" src={pic} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
