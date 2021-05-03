import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddAuthor from '../views/AddAuthor';
import Authors from '../views/Authors';
import Home from '../views/Home';
import SingleAuthor from '../views/SingleAuthor';

export default function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}
        />

        <Route
        exact
        path='/authors'
        component={() => <Authors authors={authors} setAuthors={setAuthors} /> }
        />

        <Route path='/authors/:firebaseKey'
        component={SingleAuthor}
        />

        <Route path='/add-authors'
        component={() => <AddAuthor setAuthors={setAuthors} /> }
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array,
  setAuthors: PropTypes.func
};
