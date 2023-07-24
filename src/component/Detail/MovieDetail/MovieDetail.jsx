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
import { db, storage } from "../../../firebase";
import { arrayUnion } from "firebase/firestore";
import { toast } from "react-hot-toast";

const MovieDetail = ({ movie }) => {
  const changeEmail = useSelector((state) => state.changeEmail);

  const handlecFavorite = async () => {
    if (!changeEmail) {
      toast.error("You need to be logged in to add to favorites!", {
        icon: "🔸"
        },
      );
      return;
    }

    const docRef = doc(db, "Favorite", changeEmail);

    const docSnap = await getDoc(docRef);
    console.log(docSnap.data())
    if (docSnap.exists() && docSnap.data().FavoriteID) {
      if ((docSnap.data().FavoriteID).includes(movie.id)) {
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
    if (!changeEmail) {
      toast.error("You need to be logged in to add to Remove Favorite!", {
        icon: "🔸"
        },
      );
      return;
    }
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
    if (!changeEmail) {
      toast.error("You need to be logged in to add to History!", {
        icon: "🔸"
        },
      );
      return;
    }

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
        <button class="btn"  onClick={handlecFavorite}>
 <svg class="icon" width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path></svg>
</button>
         <button onClick={handleRemoveFavorite}> Remove </button>
        <button onClick={handleHistory}> History </button>
      </div>
    </div>
  );
};

export default MovieDetail;
