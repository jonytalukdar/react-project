import React from 'react';
import Footer from './Footer';
import Header from './Header';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movies from './Movies';

const Index = () => {
  return (
    <Router>
      <Header></Header>
      <Switch path="/">
        <Movies></Movies>
      </Switch>
      <Footer></Footer>
    </Router>
  );
};

export default Index;
