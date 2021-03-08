import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

const Index = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Movies></Movies>
        </Route>
        <Route path="/movie/:id/">
          <MovieDetails></MovieDetails>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>
  );
};

export default Index;
