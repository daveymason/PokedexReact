import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter,  MasterDetail,
  GroupPanel,
} from 'devextreme-react/data-grid';

//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/React/Light/

export const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState([]);

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

  return (
    <div className="className">
      <h1>{pokemonData}</h1>
    </div>
  );
};




