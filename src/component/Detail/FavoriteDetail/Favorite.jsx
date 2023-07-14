// import React from "react";

// import {
//   collection,
  
//   doc,
//   addDoc,
//   updateDoc,
//   getDoc,
//   setDoc
// } from "firebase/firestore";
// import { db } from "../../../firebase";
// import { useSelector } from "react-redux";
// const Favorite =   () => {
// //     console.log(11);

// // //   const changeEmail = useSelector((state) => state.changeEmail);
// // // console.log(1);
//   const favorite  =  setDoc(doc(db, "Favorite", ('changeEmail')), {
//     name: "cxzczx",
//     state: "zxc",
//     country: "a"
//   });
  
// const docRef = doc(db, "Favorite", 'changeEmail');
// const docSnap =   getDoc(docRef);
// console.log(123,docSnap);
// // // const infor = docRef.get()
// // // .then(doc => {
// // //     return doc.data().country;    })

// // //     .catch(err => {
// // //         console.log('Error getting document', err);
// // //       });
// // // console.log(docSnap);
  
// // //   const docRef1 = await addDoc(
// // //     collection.doc(changeEmail()).set(db, "Favorite"),
// // //     {
// // //       name: "Tokyo111",
// // //       country: "Japan1",
// // //     }
// // //   );
// // //   console.log("Document written with ID: ", docRef1.id);

// // //   const washingtonRef = doc(db, "cities", "DC");

// // //   // Set the "capital" field of the city 'DC'
// // //   await updateDoc(washingtonRef, {
// // //     capital: true,
// // //   });
//  return(
//     <>
//         <h1>AAAA</h1>
//     </>
//  )
// };

// export default Favorite;
