import React from "react";
import Logo from "./logo/logo";
import Menu from "./Menu/Menu";
import "./Nav.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
const Nav = () => {
  const out = () => {
    signOut(auth);
    console.log(auth);
    alert("đã đăng xuất")
  };
  const check = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        alert(`Tài Khoản ${user.email} Đang Hoạt Động`); // ...
      } else {
        alert('Không có tài khoản nào ')
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
