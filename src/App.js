import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>        
        <Route path="/pokemon/:id" render={(props) => <PokemonDetails {...props} />} />
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;