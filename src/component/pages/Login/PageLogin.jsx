import React from "react";
import "./PageLogin.css";
import Nav from "../../Nav/Nav";
import Header from "../../Main/Header/Header";
const PageLogin = () => {
  return (
    <>
      <Nav />
      <div style={{ width: "75em", marginLeft: "25%" }}>
        <Header />
        <div class="container">
          <div class="card">
            <a class="singup">Sign Up</a>
            <div class="inputBox1">
              <input type="text" required="required" />
              <span class="user">Email</span>
            </div>

            <div class="inputBox">
              <input type="text" required="required" />
              <span>Username</span>
            </div>

            <div class="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
            </div>

            <button class="enter">Enter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
