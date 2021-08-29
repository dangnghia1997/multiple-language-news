import logo from './logo.svg';
import React, { useState, Suspense } from 'react';
import i18n from './i18n';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import NoMatchPage from './pages/NoMatchPage';

function App() {

  return (
    <Suspense fallback={null}>
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/posts">
              <PostListPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route component={NoMatchPage} />
          </Switch>
        </Router>
      </React.Fragment >
    </Suspense>
  );
}

export default App;
