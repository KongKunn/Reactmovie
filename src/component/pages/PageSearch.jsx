import React from "react";
import { useSelector } from "react-redux";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import Content from "../Main/Content/Content";

const PageSearch = () => {
  const searchlist = useSelector((state) => state.searchResponse.response);
  console.log("searchLIST", searchlist);
  return (
    <>
      <Nav />
      <div style={{ width: "75em", marginLeft: "25%" }}>
        <Header />
        <Content movies={searchlist} />
      </div>
    </>
  );
};

export default PageSearch;
