import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Page.css"
import Content from "../Main/Content/Content";
import { toast } from "react-hot-toast";

const PageFavorite = () => {

    const changeEmail = useSelector((state) => state.changeEmail);
    const docRef = doc(db, "Favorite", changeEmail);
 
    const [aloFavorite, setAloFavorite] = useState([])

   
    useEffect(() => {
        
        const aloDoc = async () => {
            const docSnap = await getDoc(docRef);
            setAloFavorite(docSnap.data().FavoriteList)

        }
        aloDoc()

    }, []
    )
   
    return (
        <>
            <Nav />
            <div className="body_page">
                <Header />
                <div style={{ paddingTop: '6%' }}>
                <Content movies ={aloFavorite}/>
                </div>

            </div>
        </>
    )
}

export default PageFavorite