import React from "react";
import "./MovieDetail.css";
import Trailer from "../Trailer/trailer";
import { useSelector } from "react-redux";
import {
  doc,
  updateDoc,
  getDoc,
  setDoc,
  arrayRemove,
  addDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { arrayUnion } from "firebase/firestore";
import { toast } from "react-hot-toast";

const MovieDetail = ({ movie }) => {
  const changeEmail = useSelector((state) => state.changeEmail);

  const handlecFavorite = async () => {
    const docRef = doc(db, "Favorite", changeEmail);

    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if (docSnap.exists() && docSnap.data().FavoriteID) {
      if (Object.values(docSnap.data().FavoriteID).includes(movie.id)) {
        toast("Movies already in Favorite", {
          icon: "🔸",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        toast.success("Added to Favorites!");
        await updateDoc(docRef, {
          FavoriteID: arrayUnion(movie.id),
          FavoriteList: arrayUnion(movie),

        });
      }
    }
    else {
      await setDoc(docRef, {
        FavoriteID: [movie.id],
        FavoriteList: [movie]
      }, { merge: true });
    }
  };

  const handleRemoveFavorite = async () => {

    const docRef = doc(db, "Favorite", changeEmail);

    const docSnap = await getDoc(docRef);
    const FavoriteList = docSnap.data().FavoriteID;
    if (!(docSnap.data().FavoriteID).includes(movie.id)) {
      toast("Movie not in Favorite", {
        icon: "🔸",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.success("Removed movie in Favorite!");
      await updateDoc(docRef, {
        FavoriteID: arrayRemove(movie.id),
        FavoriteList: arrayRemove(movie)
      });
    }
  };
  const handleHistory = async () => {
    console.log(changeEmail);

    const docRef = doc(db, "Favorite", changeEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists() && docSnap.data().HistoryList) {
      await updateDoc(docRef, {
        HistoryID: arrayRemove(movie.id),
        HistoryList: arrayRemove(movie),
      }).then(await updateDoc(docRef, {
        HistoryID: arrayUnion(movie.id),
        HistoryList: arrayUnion(movie),
      }))


    }
    else {
      await setDoc(docRef, {
        HistoryID: arrayUnion(movie.id),
        HistoryList: arrayUnion(movie),
      }, { merge: true });
    }
  }
  return (
    <div className="img_detail">
      <h1>{movie.original_title}</h1>
      <div className="content_detail">
        <img
          className="img_backgroud"
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt={movie.title}
        />

        <Trailer />
      </div>
      <div className="Favorite">
        <button onClick={handlecFavorite}> Favorite </button>
        <button onClick={handleRemoveFavorite}> Remove </button>
        <button onClick={handleHistory}> History </button>
      </div>
    </div>
  );
};

export default MovieDetail;
