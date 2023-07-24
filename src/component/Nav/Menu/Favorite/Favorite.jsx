import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-hot-toast';

const Favorite = () => {
  const changeEmail = useSelector((state) => state.changeEmail);
  const navigate = useNavigate()
  const handleAddFavorite = (e) => {
    e.preventDefault()

    if (!changeEmail) {
      toast.error("You need  logged !", {
        icon: "🔸"
      },
      );
    }
    else {
      navigate("/Favorite")

    }
  }


  return (
    <div className="menu_button">
      <NavLink
        onClick={handleAddFavorite}
        to="/Favorite">

        <button >

          <i className="fas fa-calendar-alt"></i>
          Favorite
        </button>
      </NavLink>
    </div>
  )
}

export default Favorite