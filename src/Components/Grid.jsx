import React, { useEffect, useState } from "react";

class Grid extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((response) => response.json())
      .then((url) => this.setState({ pokemons: url.results }));
  }

  render() {
    const { pokemons } = this.state;

    return (
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}> {pokemon.name} </li>
        ))}
        {console.log(pokemons)}
      </ul>
    );
  }
}

export default Grid;
