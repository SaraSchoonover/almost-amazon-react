/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/AuthorData';
import AuthorForm from '../AuthorForm';

const AuthorCard = ({
  firebaseKey,
  first_name,
  last_name,
  email,
  setAuthors
}) => {
  const history = useHistory();
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.push(`/authors/${firebaseKey}`);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
        <Card body>
        <CardTitle tag="h5">First Name: {first_name}</CardTitle>
        <CardTitle tag="h5">Last Name: {last_name}</CardTitle>
        <CardText>Email: {email}</CardText>
        <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
        <Button color="info" onClick={() => handleClick('view')}>View Author</Button>
        <Button color ="warning" onClick={() => handleClick('edit')}>
          {editing ? 'Close Form' : 'Edit Author'}
        </Button>
      {
        editing && <AuthorForm
        formTitle='Edit Author'
        setAuthors={setAuthors}
        firebaseKey={firebaseKey}
        first_name={first_name}
        lat_name={last_name}
        email={email}
        />}
        </Card>
  );
};

AuthorCard.propTypes = {
  firebaseKey: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  setAuthors: PropTypes.func
};
export default AuthorCard;
