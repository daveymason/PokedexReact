import axios from "axios";
import { useState } from "react";
import * as React from "react";
import DataGrid, {
  Scrolling, Paging, Column, HeaderFilter,  MasterDetail,
  GroupPanel,
} from 'devextreme-react/data-grid';

//https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/RowSelection/React/Light/

export const PokemonGrid = (pokemon) => {
    const [pokemonData, setPokemonData] = useState([]);

    const getPokemon = async (pokemon) => {
        const toArray = [];
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
          const e = await axios.get(url);
    
          //Set useStates to data
          toArray.push(e.data);
          setPokemonData(toArray);
    
          console.table(e.data);
        } catch (e) {
          console.log(e);
        }
      };

  return (
        <DataGrid dataSource={pokemonData} showBorders={true}>
          <Column dataField="name" />
          <Column dataField="id" />
          <Column dataField="base_experience" />
          <Column dataField="height" />
          <Column dataField="weight" />
          <Column dataField="types" />
        </DataGrid>
  );
};




