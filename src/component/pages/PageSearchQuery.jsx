import React,{useEffect,useState} from "react";
import { useSearchParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Main/Header/Header";
import Content from "../Main/Content/Content";
import "./Page.css"

const PageSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();


const searchQuery = searchParams.get("searchWord");
console.log(1)
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
    },
  };
  const urlSearch =`https://api.themoviedb.org/3/search/movie?language=en-US&query=${searchQuery}&page=1`;
  console.log(searchQuery)
const [ querysearch , setQuerysearch] = useState([])
console.log(querysearch)
  useEffect(() => {
    console.log(2)
    //https://api.themoviedb.org/3/search/movie?language=en-US&query=john&page=1
    const fetchData = () => {
      
      fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&query=${searchQuery}&page=1`, options)
        .then((response) => response.json())
        .then((response) => {
            setQuerysearch (response.results)

        });
    };

    fetchData();
  }, []);


  return (
<>
      <Nav />
      <div className="body_page" style={{ }}>
        <Header />
        <Content movies={querysearch} />
      </div>
    </>
  )
};

export default PageSearchQuery;
