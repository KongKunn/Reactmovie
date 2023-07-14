import React from "react";
import Logo from "./logo/logo";
import Menu from "./Menu/Menu";
import "./Nav.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUsername } from "../Redux/SliceUserName";
import { toast } from "react-hot-toast";

const Nav = () => {
  const dispatch = useDispatch();

  const out = async () => {


    signOut(auth);
    dispatch(setUsername(null));
    console.log(auth);
    toast('logged out!', {
      icon: '👋',
    });
  };
  const check = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        toast(
          <div>
            Account <span style={{ color: "red" }}>{user.displayName}</span> is
            active
          </div>,
          {
            icon: "👏",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          }
        );
      } else {
        toast("No active accounts ");
      }
    });
  };
  return (
    <div className="navbar">
      <Logo />
      <Menu />
      <button style={{ paddingLeft: "40px" }} onClick={out}>
        SignOut
      </button>
      <button style={{ paddingLeft: "40px" }} onClick={check}>
        {" "}
        Check
      </button>
    </div>
  );
};

export default Nav;
