import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import "./infor.css";
import EditInfor from './EditInfor';

const Infor = () => {
  const changeUsername = useSelector((state) => state.changeUsername);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing); 
  }

  return (
    <div className='infor'>
      <button onClick={handleEdit}>Edit</button>
      <div>
        {isEditing ? (
          <div className='Editt'>
           <EditInfor setIsEditing ={setIsEditing}/>
          </div>
         ) : 
          (
          <>
            <h3 className="name_infor">{changeUsername}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Infor;
