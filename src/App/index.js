import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import {
//   BrowserRouter as Router
// } from 'react-router-dom';

import { getAuthors } from '../helpers/data/AuthorData';
import Routes from '../helpers/Routes';
import firebaseConfig from '../helpers/apiKeys';
import NavBar from '../components/NavBar';
// import React, { useEffect, useState } from 'react';
// import './App.scss';
// import firebase from 'firebase';
// import firebaseConfig from '../helpers/apiKeys';
// import AuthorForm from '../AuthorForm';
// import { getAuthors } from '../helpers/data/AuthorData';
// import AuthorCard from '../components/AuthorCard';

firebase.initializeApp(firebaseConfig);
function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then(setAuthors);
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something else
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <NavBar user={user} />
    <Routes
      authors={authors}
      setAuthors={setAuthors}
     />
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
