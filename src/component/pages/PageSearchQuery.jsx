import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import Content from "../Main/Content/Content";

const PageSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();


const searchQuery = searchParams.get("searchWord");
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };

const [ querysearch , setQuerysearch]= useState([])
  useEffect(() => {
    const fetchData = () => {
      const urlSearch =
        "https://api.themoviedb.org/3/search/movie?query=" +
        searchQuery +
        "&include_adult=false&language=en-US&page=1";
      fetch(urlSearch, options)
        .then((response) => response.json())
        .then((response) => {
            setQuerysearch (response.results)
          console.log("@Response: ", response.results);
        });
    };

    fetchData();
  }, [searchQuery]);


  return (
<>
      <Nav />
      <div style={{ width: "75em", marginLeft: "25%" }}>
        <Header />
        <Content movies={querysearch} />
      </div>
    </>
  )
};

export default PageSearchQuery;
