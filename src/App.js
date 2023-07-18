import React,{useState} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./component/pages/PageHome";
import PageWatchList from "./component/pages/PageWatchList";
import PageComingSoon from "./component/pages/PageComingSoon";
import PageTopRated from "./component/pages/PageTopRated";
import PageLogin from "./component/pages/Login/PageLogin";
import PageSearchQuery from "./component/pages/PageSearchQuery";
import Detail from "./component/Detail/Detail";
import PageDetail from "./component/pages/PageDetail";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { Toaster } from "react-hot-toast";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { db } from "./firebase";
import Infor from "./component/Main/Header/infor/infor";
import EditInfor from "./component/Main/Header/infor/EditInfor";
import PageHistory from "./component/pages/PageHistory";

const App = () => {
  return (
    <>
      <div>
        <Toaster  position="bottom-right"
  reverseOrder={false} />
      </div>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/WatchList" element={<PageWatchList />} />
        <Route path="/ComingSoon" element={<PageComingSoon />} />
        <Route path="/TopRated" element={<PageTopRated />} />
        <Route path="/History" element={<PageHistory />} />

        <Route path="/Login" element={<PageLogin />} />
        <Route path="/QuerySearch" element={<PageSearchQuery />} />
        <Route path="/detail">
          <Route path=":id" element={<PageDetail />} />
          
        </Route>
        
      </Routes>
      
    </>
  );
};

export default App;
