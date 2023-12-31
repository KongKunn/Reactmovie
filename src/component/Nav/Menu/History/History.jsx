import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-hot-toast';

const History = () => {
  const changeEmail = useSelector((state) => state.changeEmail);
  const navigate = useNavigate()
  const handleAddHistory = (e) => {
    e.preventDefault()

    if (!changeEmail) {
      toast.error("You need  logged !", {
        icon: "🔸"
      },
      );
    }
    else {
      navigate("/History")

    }
  }


  return (
    <div className="menu_button">
      <NavLink
        onClick={handleAddHistory}
        to="/History">

        <button >

          <i className="fas fa-calendar-alt"></i>
          History
        </button>
      </NavLink>
    </div>
  )
}

export default History