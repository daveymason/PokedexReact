import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter,  MasterDetail,
  GroupPanel, FilterRow,
} from 'devextreme-react/data-grid';

import {PokemonGrid} from './PokemonGrid';
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

  const filterType = (pokemon) => {
    const filter = pokemon.pokemon.filter((pokemon) => pokemon.name === "bulbasaur");
    console.log(filter);
  }

  return (
    <Grid container justifyContent="space-evenly" direction="row" className="App">
      <Grid
        container
        justifyContent='flex-start'
        sx={{pl: 5, ml: 5}}
      >
        <Button
          onClick={getAllPokemon}
          variant="contained"
          endIcon={<SendIcon />}
        >
          getAllPokemon
        </Button>
        <Button
          onClick={filterType}
          variant="contained"
          endIcon={<SendIcon />}
        >Lets see what happens</Button>
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
          <MasterDetail
          enabled={true}
          component={PokemonGrid}
        />
          <Column dataField="name" />
          <Scrolling mode="virtual" rowRenderingMode="virtual" />
          <FilterRow visible={true} />
        </DataGrid>
        <hr />
      </Grid>
    
      <Grid item xs={9}>
        <DataGrid dataSource={pokemonData} showBorders={true}>
          <Column dataField="name" />
          <Column dataField="id" />
          <Column dataField="base_experience" />
          <Column dataField="height" />
          <Column dataField="weight" />
          <Column dataField="types" />
        </DataGrid>

        {pokemonData.map((data) => {
      return (
      <div className="container">
        <img src={data.sprites["front_default"]} />
      </div>
    );
  })}
      </Grid>

  
    </Grid>
  );
};

export default Pokemon;


