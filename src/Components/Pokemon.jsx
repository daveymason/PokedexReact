import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, { Column, Selection, Scrolling } from 'devextreme-react/data-grid';



import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Grid from "@mui/material/Grid";

const Pokemon = () => {
  //Usestate variables
  const [pokemon, setPokemon] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [pokemonData, setPokemonData] = useState(["id", "name", "weight", "base_experience"]);

  //Get data from API
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const e = await axios.get(url);

      //Set useStates to data
      toArray.push(e.data);
      setPokemonData(toArray);

      console.table(e.data)
    } catch (e) {
      console.log(e);
    }
  };

  const getPokemonTwo = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((url) => setPokemonData({ pokemonData: url.results }));
    };

  const getAllPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then((response) => response.json())
      .then((url) => setPokemons({ pokemons: url.results }));
  };

  const handleChange = (e) => {
    alert('Pokemon Name :' + e.data.name)
    setPokemon(e.data.name)
    getPokemon() 
  };

  return (
    <div className="App">
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Button
            onClick={getAllPokemon}
            variant="contained"
            endIcon={<SendIcon />}
          >
            getAllPokemon
          </Button>
        </Grid>
        <Grid item xs={7}>
          <DataGrid
            dataSource={pokemons.pokemons}
            rowAlternationEnabled={true}
            showBorders={true}
            height={440}
          >
            <Column 
              dataField="name"
              onClick={handleChange} 
            />
            <Scrolling mode="virtual" rowRenderingMode="virtual" />
          </DataGrid>
          <hr />
        </Grid>
      </Grid>
    </div>
  );
};

export default Pokemon;