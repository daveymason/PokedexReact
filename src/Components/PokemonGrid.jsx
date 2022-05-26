import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter,  MasterDetail,
  GroupPanel,
} from 'devextreme-react/data-grid';

import Button from "@mui/material/Button";

//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/React/Light/

export const PokemonGrid = (pokemon) => { 
  const [pokemonInfo, setPokemonInfo] = useState([]);
  console.log(pokemonInfo);
  //Get data from API
  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.data.data.name}`;
      const e = await axios.get(url);

      //Set useStates to data
      toArray.push(e.data);
      setPokemonInfo(toArray);

    } catch (e) {
      console.log(e);
    }
  };

  const alertPokemon = (e) => {
    {e.map((data) => {
      return (
      <div className="container">
        <img src={data.sprites["front_default"]} />
      </div>
    );
  })}   
  }

  return (
    <>
<Button onClick={getPokemon}>Get Pokemon</Button>
      
    </>
  );
};




