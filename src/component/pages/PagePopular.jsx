// import React, { useState, useEffect } from "react";
// import Nav from "../Nav/Nav";
// import Header from "../Main/Header/Header";
// import Content from "../Main/Content/Content";

// const PagePopular = () => {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBmNDE5Nzg2ODdlYjRkNDA4MTRjZWQ5NmMxNGY3MiIsInN1YiI6IjY0NjVkMWI1ZDE4NTcyMDE0MDJmNmI4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UWuHQwXdC-wJxn69D49_xz7tgNxq8pC9aKv1IK0FmF0",
//     },
//   };
//   const [toprate, setToprate] = useState([]);

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//       options
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         setToprate(response.results);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <>
//       <Nav />
//         <Header />
//         <div style={{ paddingTop: "40%" }}>
//           <Content movies={toprate} />
//         </div>
//     </>
//   );
// };

// export default PagePopular;
