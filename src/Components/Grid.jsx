import React from "react";

import "devextreme/dist/css/dx.light.css";

import { DataGrid, Column } from "devextreme-react/data-grid";

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
  }

  render() {
    const { pokemons } = this.state;
    
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