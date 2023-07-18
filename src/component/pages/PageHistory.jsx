import React, { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import { useSelector } from "react-redux";
import { doc,getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import "./Page.css"

const PageHistory = () => {
    
    const changeEmail = useSelector((state) => state.changeEmail);
    const docRef = doc(db, "Favorite", changeEmail);

    const [aloHistory, setAloHistory]= useState([])
    

    useEffect(  ()=> {
        const aloDoc = async ()=> {
           const docSnap = await getDoc(docRef);
           setAloHistory(docSnap.data().HistoryList)
           console.log(aloHistory);
        }
        aloDoc()
       
    },[]
    )

    return (
        <>
            <Nav />
            <div className="body_page">
                <Header />
                <div style={{ paddingTop: '6%' }}>
                </div>

            </div>
        </>
    )
}

export default PageHistory