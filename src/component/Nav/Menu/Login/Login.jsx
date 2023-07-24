import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { setUsername } from "../../../Redux/SliceUserName";


const Login = () => {

  const [isLogin, setIsLogin] = useState(false)

  const dispatch = useDispatch();
  const out = async () => {


    signOut(auth);
    dispatch(setUsername(null));
    console.log(auth);
    toast('logged out!', {
      icon: '👋',
    });
  };


  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("USER", user);
      setIsLogin(true)

      // ...
    } else {
      console.log("USER", user);
      setIsLogin(false)
    }
  });
  return (
    <div className="menu_button">
      {isLogin ? (
        <button  onClick={out}>
          <i className="fas fa-calendar-alt"></i>
          SignOut
        </button>

      ) : (<NavLink to="/Login">
        <button>
          <i className="fas fa-calendar-alt"></i>
          Login
        </button>
      </NavLink>)
      }

    </div>
  );
};

export default Login;
