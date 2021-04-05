import axios from 'axios';
import { useState } from 'react';
import { useEffect} from "react";
import './App.css';


const App = () => { 
  //Usestate variables
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  //Get data from API
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
     <h1>Hello</h1>
    </div>
  );
}

export default App;
