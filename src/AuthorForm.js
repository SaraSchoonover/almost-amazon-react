/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from './helpers/data/AuthorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  first_name,
  last_name,
  email,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    first_name: first_name || '',
    last_name: last_name || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });
  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // add author to firebase //
    if (author.firebaseKey) {
      updateAuthor(author).then((authorArray) => setAuthors(authorArray));
    } else {
      addAuthor(author).then((authorArray) => setAuthors(authorArray));
    }
  };

  return (
    <>
    <div className='author-form'>
    <Form id='addAuthorForm' autoComplete='off' onSubmit={handleSubmit}>
    <h2>{formTitle}</h2>
    <FormGroup>
    <Label for="first_name">First Name: </Label>
    <Input
    name='first_name'
    type='text'
    placeholder='First Name'
    value={author.first_name}
    onChange={handleInputChange}
    ></Input>
    </FormGroup>

    <FormGroup>
    <Label for="last_name">Last Name: </Label>
    <Input
    name='last_name'
    type='text'
    placeholder='Last Name'
    value={author.last_name}
    onChange={handleInputChange}></Input>
    </FormGroup>

    <FormGroup>
    <Label for="email">Email: </Label>
    <Input
    name='email'
    type='text'
    placeholder='Email'
    value={author.email}
    onChange={handleInputChange}></Input>
    </FormGroup>
    <Button type='submit'>Submit</Button>
    </Form>
    </div>
  </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string,
  setAuthors: PropTypes.func,
  firebaseKey: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
};

export default AuthorForm;
