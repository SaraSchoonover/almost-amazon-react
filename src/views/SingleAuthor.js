import React, { useEffect, useState } from 'react';
import {
  useParams
} from 'react-router-dom';
import { getSingleAuthor } from '../helpers/data/AuthorData';

export default function SingleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey)
      .then(setAuthor);
  }, []);
  console.warn(author);
  return (
    <div>
      <h1>Single Author</h1>
      <h2>{author.first_name}</h2>
      <h2>{author.last_name}</h2>
      <h2>{author.email}</h2>
    </div>
  );
}
