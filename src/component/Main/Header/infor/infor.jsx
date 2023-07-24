import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./infor.css";
import EditInfor from './EditInfor';

const Infor = () => {
  const dispatch = useDispatch();
  const changeUsername = useSelector((state) => state.changeUsername);
  const changeAvatar = useSelector((state) => state.changeAvatar);
  const [isEditing, setIsEditing] = useState(false);
  const [newAvatar, setNewAvatar] = useState()

  const handleEdit = () => {
    setIsEditing(!isEditing); 
  }

  return (
    <div className='infor'>
      
      <div>
        {isEditing ? (
          <div className='Editt'>
           <EditInfor setIsEditing ={setIsEditing} setnewAVA = {setNewAvatar}
           />
          </div>
         ) : 
          (
          <>
                <img style={{width:"50px"}} onClick={handleEdit} src={newAvatar} alt="" />
                
            <h3 onClick={handleEdit} className="name_infor">{changeUsername}</h3>
          </>
          
        )}
      </div>
    </div>
    
  );
}

export default Infor;