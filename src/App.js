import React from 'react';

import GlobalStyle from './styles/global'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/produtos">
            <Produtos />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/contato">
            <Contato />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle />
    </>
  );
}

export default App;

