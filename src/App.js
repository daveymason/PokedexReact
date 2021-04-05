import axios from 'axios';
import { useState } from 'react';
import './App.css';

const App = () => { 
  //Usestate variables
  const [pokemon,setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonDate] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);

  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
