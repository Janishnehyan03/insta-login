import React from "react";
import { useState } from "react";
import Axios from "./Axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || password === "") {
        alert("Please enter username and password");
      }
      let res = await Axios.post("/login", { username, password });
      console.log(res);
      if (res.status === 200) {
        alert("Please try again");
      }
    } catch (error) {
      console.log(error.response);
      alert("something went wrong");
    }
  };
  return (
    <div className="wrapper">
      <div className="header">
        <div className="top">
          <div className="logo">
            <img src="instagram.png" alt="instagram" style={{ width: 175 }} />
          </div>
          <div className="form">
            <div className="input_field">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input_field">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="input"
              />
            </div>
            <div onClick={(e) => login(e)} className="btn">
              <a href="#">Log In</a>
            </div>
          </div>
          <div className="or">
            <div className="line" />
            <p>OR</p>
            <div className="line" />
          </div>
          <div className="dif">
            <div className="fb">
              <img src="facebook.png" alt="facebook" />
              <p>Log in with Facebook</p>
            </div>
            <div className="forgot">
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>
        <div className="signup">
          <p>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
        <div className="apps">
          <p>Get the app.</p>
          <div className="icons">
            <a href="#">
              <img src="appstore.png" alt="appstore" />
            </a>
            <a href="#">
              <img src="googleplay.png" alt="googleplay" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="links">
          <ul>
            <li>
              <a href="#">ABOUT US</a>
            </li>
            <li>
              <a href="#">SUPPORT</a>
            </li>
            <li>
              <a href="#">PRESS</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">JOBS</a>
            </li>
            <li>
              <a href="#">PRIVACY</a>
            </li>
            <li>
              <a href="#">TERMS</a>
            </li>
            <li>
              <a href="#">DIRECTORY</a>
            </li>
            <li>
              <a href="#">PROFILES</a>
            </li>
            <li>
              <a href="#">HASHTAGS</a>
            </li>
            <li>
              <a href="#">LANGUAGE</a>
            </li>
          </ul>
        </div>
        <div className="copyright">© 2019 INSTAGRAM</div>
      </div>
    </div>
  );
}

export default Login;
