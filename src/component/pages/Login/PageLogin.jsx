import React, { useState } from "react";
import "./PageLogin.css";
import Nav from "../../Nav/Nav";
import Header from "../../Main/Header/Header";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUsername } from "../../Redux/SliceUserName";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { setEmail } from "../../Redux/SliceEmail";

const PageLogin = () => {
  const [inputemail, setInputemail] = useState("");
  const [inputpassword, setInputpassword] = useState("");
  const [inputName, setInputName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Login
  const handleLogin = () => {
    console.log("INPUTEMAIL", inputemail);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, inputemail, inputpassword)
      .then((userCredential) => {
        navigate("/");
        toast.success("Successfully toasted!");
        // Signed in
        const user = userCredential.user;
        dispatch(setUsername(user.displayName));
        console.log("INPUTEMAIL", inputemail);

        dispatch(setEmail(inputemail));

        console.log(user);
        // ...
      })

      .catch((error) => {
        const errorMessage = error.message;
        if (error.code == "auth/invalid-email") {
          toast.error("Invalid  Email");
        }
        if (error.code == "auth/user-not-found") {
          toast.error("User not found !");
        }

        if (error.code == "auth/too-many-requests") {
          toast.error("Many Requests");
        }
        if (error.code == "auth/wrong-password") {
          toast.error(" Wrong Password ");
        }
        if (error.code == "auth/missing-password") {
          toast.error("Wrong Password");
        }
        console.log(error.code);
      });
  };

  // Register
  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, inputemail, inputpassword)
      .then((userCredential) => {
        navigate("/");
        toast.success("Successfully toasted!");
        console.log(userCredential);
        const user = userCredential.user;

        updateProfile(user, {
          displayName: inputName,
        })
          .then(() => {
            dispatch(setUsername(user.displayName));
            dispatch(setEmail(inputemail));

            console.log("Profile updated!", user.displayName);
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          toast.error("Email Already In Use");
        }
        if (
          error.message ==
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          toast.error("Password should be at least 6 characters");
        }
        if (error.code == "auth/invalid-email") {
          toast.error("Invalid  Email");
        }
        // ..
      });
  };

  const handlechangeEmail = (e) => {
    setInputemail(e.target.value);
  };

  const handlechangePassword = (e) => {
    setInputpassword(e.target.value);
  };

  const handlechangeName = (e) => {
    setInputName(e.target.value);
  };

  const hanldleRegisterEnter = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };
  const handleLoginEnter = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  return (
    <>
      <Nav />

      <div className="Main_Login">
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
                onKeyDown={handleLoginEnter}
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
                value={inputpassword}
                onChange={handlechangePassword}
                onKeyDown={handleLoginEnter}
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
                onKeyDown={hanldleRegisterEnter}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={inputemail}
                onChange={handlechangeEmail}
                onKeyDown={hanldleRegisterEnter}
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
                onKeyDown={hanldleRegisterEnter}
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
