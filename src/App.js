import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pokedex} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;