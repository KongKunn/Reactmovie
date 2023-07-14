import React from 'react';
import { useSelector } from 'react-redux';
import "./infor.css";

const Infor = () => {
  const changeUsername = useSelector((state) => state.changeUsername);

  return (
    <div className='infor'>
      <img className="avatar" src="./IMG/avatar.png" alt="" />
      <div>
        <h3 className="name_infor">{changeUsername}</h3>
        <h5 className="level_infor">Level : 99</h5>
      </div>
    </div>
  );
}

export default Infor;
