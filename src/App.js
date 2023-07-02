import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageHome from "./component/pages/PageHome";
import PageWatchList from "./component/pages/PageWatchList";
import PageComingSoon from "./component/pages/PageComingSoon";
import PageTopRated from "./component/pages/PageTopRated";
import PageLogin from "./component/pages/Login/PageLogin";
import PageSearch from "./component/pages/PageSearch";
import PageSearchQuery from "./component/pages/PageSearchQuery";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/WatchList" element={<PageWatchList />} />
        <Route path="/ComingSoon" element={<PageComingSoon />} />
        <Route path="/TopRated" element={<PageTopRated />} />
        <Route path="/Login" element={<PageLogin />} />
        <Route path="/Search" element={<PageSearch />} />
        <Route path="/QuerySearch" element={<PageSearchQuery />} />


      </Routes>
    </>
  );
};

export default App;
