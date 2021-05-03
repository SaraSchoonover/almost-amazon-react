import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/AuthorCard';

function Authors({ authors, setAuthors }) {
  return (
      <>
      <hr/>
        <div className="card-container">
          {authors.map((authorInfo) => (
            <AuthorCard
            key={authorInfo.firebaseKey}
            firebaseKey={authorInfo.firebaseKey}
            first_name={authorInfo.first_name}
            last_name={authorInfo.last_name}
            email={authorInfo.email}
            setAuthors={setAuthors}
            />
          ))}
        </div>
        </>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
