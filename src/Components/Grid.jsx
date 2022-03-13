import React from "react";

import "devextreme/dist/css/dx.light.css";

import { DataGrid, Column } from "devextreme-react/data-grid";
import axios from "axios";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
      pokemon: '',
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((url) => this.setState({ pokemons: url.results }))

      console.log(pokemons)
      
  }

  render() {
    const { pokemons } = this.state;
    let { pokemon } = this.state;
    
    console.log(pokemon.abilities)
    return (
      <DataGrid 
      dataSource={pokemons}
      rowAlternationEnabled={true}
      showBorders={true}
      >
        <Column dataSource="id"/>
      </DataGrid>
      
    );
  }
}

export default Grid;