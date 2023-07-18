import React, { useState } from 'react';
import Infor from "./infor";
import { useSelector } from 'react-redux';
import "./EditInfor.css"
import { getAuth, updateProfile,updatePassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUsername } from '../../../Redux/SliceUserName';


import { db } from '../../../../firebase';
const EditInfor = (props) => {
  const dispatch = useDispatch();
  const changeUsername = useSelector((state) => state.changeUsername);

  const auth = getAuth()
  const [newUsername, setNewUsername] = useState(changeUsername)
  const [newPassword, setNewPassword] = useState('')
  const { setIsEditing } = props
  const handleSaveName = () => {
    console.log(auth.currentUser)


    updateProfile(auth.currentUser, {

      displayName: newUsername
    }).then(() => {

      dispatch(setUsername(newUsername));
      console.log('saddasd', setUsername)
    }).catch((error) => {
      // An error occurred
      // ...
    });
  };
  const handleSavePassword = () => {
    const user = auth.currentUser;
  

    updatePassword(user, newPassword).then(() => {
      console.log("xx",auth.currentUser)
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  }
  const handleCancel = () => {
    setIsEditing(false);
  }
  const avatarUrl = [
    "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    "https://preview.redd.it/fc9k38jwfwv51.png?auto=webp&s=9ce3d4c488091bb21969fd0fad7a6d89e4bfc50d",
    "https://preview.redd.it/se39g98mljw51.png?auto=webp&s=758dfe2b0a2df439b06b68533e763f413d58b46c",
    "https://preview.redd.it/5es1lne1du261.png?width=640&crop=smart&auto=webp&s=e6eb0ee5710710000e4fbace119112de63324a38",
    "https://i.redd.it/7ipyf6pvqac61.png",
    "https://i.redd.it/ksmb0m02ppy51.png",
    "https://preview.redd.it/cpwkbke13vv51.png?auto=webp&s=9158e49b35ad2581d840efd2a013a9ead06abbc7",
    "https://preview.redd.it/26s9eejm8vz51.png?auto=webp&s=e38d32ee0ffa0666fade2abd62ed59037c119990",
  ];

  // const handleNewUsername=(e)=>{
  //     setNewUsername=(e.target.value)
  // }
  const handleChangeName = (e) => {
    setNewUsername(e.target.value)
  }
  const handleChangePassword =(e)=>{
    setNewPassword(e.target.value)
  }
  return (
    <div className="Edit">
      <button className="cancel_edit" onClick={handleCancel}>
        Close
      </button>
      <section className="input-container">
        <div>Display Name</div>
        <input type="text" value={newUsername} onChange={handleChangeName} />
        <button onClick={handleSaveName}>save</button>
        <div>Password</div>
        <input type="password" value={newPassword} placeholder="****" onChange={handleChangePassword} />
        <button onClick={handleSavePassword}>save</button>

        <div className="input-image-container">
          <label>Profile Picture</label>
          {avatarUrl.map((url) => {
            return <img onClick={(e) => console.log(e.target.src)} src={url} className="input-image" alt="Avatar" />;
          })}
        </div>
      </section>
    </div>

  );
};

export default EditInfor;
