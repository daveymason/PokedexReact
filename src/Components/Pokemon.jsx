import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling,  Column, 
  Selection, FilterRow,
} from 'devextreme-react/data-grid';


import {PokemonDetails} from './PokemonDetails';
//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/React/Light/

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import Grid from "@mui/material/Grid";

const Pokemon = () => {
  //Usestate variables
  const [pokemon, setpokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  //Get data from API
  const getPokemon = async (pokemon) => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const e = await axios.get(url);

      //Set useStates to data
      toArray.push(e.data);
      setPokemonData(toArray);

    } catch (e) {
      console.log(e);
    }
  };

  const getAllPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then((response) => response.json())
      .then((url) => setpokemon({ pokemon: url.results }));
  };

  const handleChange = (e) => {
    const pokemon = e.data.name; //to do: update to useEffect 
    getPokemon(pokemon);
  };

  return (
    <Grid container justifyContent="space-evenly" direction="row" className="App">
      <Grid
        item
        xs={12}
      >
        <Button
          onClick={getAllPokemon}
          variant="contained"
          endIcon={<SendIcon />}
        >
          getAllPokemon
        </Button>
        </Grid>
      <Grid
        item
        xs={2}
      >
        <DataGrid
          dataSource={pokemon.pokemon}
          rowAlternationEnabled={true}
          showBorders={true}
          height={'85vh'}
          onRowClick={handleChange}
          remoteOperations={true}
        >
          <Selection mode="single" />
          <Column dataField="name" caption="Name" />
          <Scrolling mode="virtual" rowRenderingMode="virtual" />
          <FilterRow visible={true} />
        </DataGrid>
        <hr />
      </Grid>
    
      
        {pokemonData.map((data) => {
          return (
            <Grid item xs={9} sx={{bgcolor: "#fff"}}>
                <PokemonDetails data={data} />
            </Grid>
          );
        })}

  
    </Grid>
  );
};

export default Pokemon;


