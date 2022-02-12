import axios from "axios";
import { useState } from "react";
import * as React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Search = () => {
      //Usestate variables
      const [pokemon, setPokemon] = useState("pikachu");
      const [pokemonData, setPokemonData] = useState([]);
      const [pokemonType, setPokemonType] = useState("");
    
      //Get data from API
      const getPokemon = async () => {
        const toArray = [];
        try {
          const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
          const res = await axios.get(url);
    
          //Set useStates to data
          toArray.push(res.data);
          setPokemonType(res.data.types[0].type.name);
          setPokemonData(toArray);
    
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      };
    
      const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase());
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        getPokemon();
      };
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
            <label>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Enter Pokemon"
              />
            </label>
          </form>
    
          {pokemonData.map((data) => {
            return (
              <div className="container">
                <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="" src={data.sprites["front_default"]} />
          </ListItemAvatar>
          <ListItemText
            primary={pokemon}
            secondary={
              <ul>
                <li>
                  <strong>Type: </strong>
                  {pokemonType}
                </li>
                <li>
                  <strong>Height: </strong>
                  {Math.round(data.height * 3.9)}
                </li>
                <li>
                  <strong>Weight: </strong>
                  {Math.round(data.weight / 4.3)} lbs
                </li>
                <li>
                  <strong>Battles: </strong>
                  {data.game_indices.length}
                </li>
              </ul>
            }
          />
        </ListItem>
      </List>;
              </div>
            );
          })}
        </div>
      );
    };
    
    export default Search;
