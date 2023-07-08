import React, { useState } from "react";
import "./PageLogin.css";
import Nav from "../../Nav/Nav";
import Header from "../../Main/Header/Header";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const PageLogin = () => {
  const [inputemail, setInputemail] = useState("");
  const [inputpassword, setInputpassword] = useState("");
  const [inputName, setInputName] = useState("");
  // Login
  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputemail, inputpassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
// Register
const handleRegister = ()=> {
  const auth = getAuth();
createUserWithEmailAndPassword(auth,inputName, inputemail, inputpassword)
  .then((userCredential) => {
    console.log(userCredential);
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
}
  

  const handlechangeEmail = (e) => {
    setInputemail(e.target.value);
  };
  const handlechangePassword = (e) => {
    setInputpassword(e.target.value);
  };
  const handlechangeName = (e) => {
    setInputName(e.target.value);
  };

  return (
    <>
    
      <Nav />

      <div style={{ width: "75em", marginLeft: "25%", height: "100vh" }}>
        <Header />

        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />
          <div className="login">
            <div className="form">
              <label htmlFor="chk" aria-hidden="true">
                Log in
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required=""
                value={inputemail}
                onChange={handlechangeEmail}
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                value={inputpassword}
                onChange={handlechangePassword}
              />
              <button onClick={handleLogin}>Log in</button>
            </div>
          </div>
          <div className="register">
            <div className="form">
              <label htmlFor="chk" aria-hidden="true">
                Register
              </label>
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="Username"
                required=""
                value={inputName}
                onChange={handlechangeName}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={inputemail}
                onChange={handlechangeEmail}
                required=""
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                value={inputpassword}
                onChange={handlechangePassword}
              />
              <button onClick={handleRegister}>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageLogin;
