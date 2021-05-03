import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';
// import React, { useEffect, useState } from 'react';
// import './App.scss';
// import firebase from 'firebase';
// import firebaseConfig from '../helpers/apiKeys';
// import AuthorForm from '../AuthorForm';
// import { getAuthors } from '../helpers/data/AuthorData';
// import AuthorCard from '../components/AuthorCard';

// firebase.initializeApp(firebaseConfig);
function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  return (
    <>
    <Router>
      <NavBar />
      <Routes authors={authors}
      setAuthors={setAuthors}/>
    </Router>
    </>
  );
}

// function App() {
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     getAuthors().then((resp) => setAuthors(resp));
//   }, []);
//   return (
//     <>
//       <AuthorForm
//       formTitle='Add Author'
//       setAuthors={setAuthors}
//       />
//       <hr/>
//       <div className="card-container">
//         {authors.map((authorInfo) => (
//           <AuthorCard
//             key={authorInfo.firebaseKey}
//             firebaseKey={authorInfo.firebaseKey}
//             first_name={authorInfo.first_name}
//             last_name={authorInfo.last_name}
//             email={authorInfo.email}
//             setAuthors={setAuthors}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// /* <Card body key={authorInfo.firebaseKey}>
// <CardTitle tag="h5">{authorInfo.first_name}</CardTitle>
// <CardText>Email: {authorInfo.email}</CardText>
// <Button onClick={() => console.warn(`${authorInfo.first_name}'s email is ${authorInfo.email}`)}>Get Author</Button>
// </Card> */

export default App;
