import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling,
  Column,
  Selection,
  FilterRow,
} from "devextreme-react/data-grid";

import { PokemonDetails } from "./PokemonDetails";
//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/React/Light/

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { textTransform } from "@mui/system";

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

  window.onload = getAllPokemon;

  const handleChange = (e) => {
    const pokemon = e.data.name; //to do: update to useEffect
    getPokemon(pokemon);
  };

  const drawerWidth = 240;

  return (
    <Grid container justifyContent="flex-end" direction="row" className="App">
      <Box sx={{ display: "flex", textTransform: 'capitalize' }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <DataGrid
            dataSource={pokemon.pokemon}
            rowAlternationEnabled={true}
            showBorders={true}
            onRowClick={handleChange}
            remoteOperations={true}
          >
            <Selection mode="single" />
            <Column dataField="name" caption="Name" />
            <Scrolling mode="virtual" rowRenderingMode="virtual" />
            <FilterRow visible={true} />
          </DataGrid>
        </Drawer>
      </Box>
  
        {pokemonData.map((data) => {
          return (
            <Grid item xs={12}>
              <PokemonDetails data={data} />
            </Grid>
          );
        })}
   
    </Grid>
  );
};

export default Pokemon;
