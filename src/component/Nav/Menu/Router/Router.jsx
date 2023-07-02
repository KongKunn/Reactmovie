import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Comingsoon from "../ComingSoon/Comingsoon";
import Home from "../Home/Home";
import Watchlist from "../WatchList/Watchlist";
import Toprated from "../TopRated/Toprated";
const Router = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UpComing" element={<Comingsoon />} />
        <Route path="/TopRated" element={<Watchlist />} />
        <Route path="/Popular" element={<Toprated />} />
      </Routes> */}
    </div>
  );
};

export default Router;
