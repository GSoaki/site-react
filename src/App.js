import React from 'react';

import GlobalStyle from './styles/global'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Pages/Home'
import Sobre from './components/Pages/Sobre'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;

