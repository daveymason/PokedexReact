import * as React from "react";
import Grid from "@mui/material/Grid";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

export const PokemonDetails = (data) => {

  return (
    <Grid container justifyContent="space-evenly" direction="row">

      <Card >
      <CardContent>
        <Grid item xs={2}>
        <Avatar src={data.data.sprites["front_default"]} />
        </Grid>
        <Grid item xs={10}>
        <h3>{data.data.name}</h3>
        </Grid>
      </CardContent>
      <Divider light />
      <Box display={'flex'}>
        <Box p={2} flex={'auto'} >
          <p >Height</p>
          <p >{data.data.height}</p>
        </Box>
        <Box p={2} flex={'auto'} >
          <p >Weight</p>
          <p >{data.data.weight}</p>
        </Box>
        <Box p={2} flex={'auto'} >
          <p >Experience</p>
          <p >{data.data.base_experience}</p>
        </Box>
      </Box>
      <Box>
      <h1>{data.data.name}</h1>
      <img alt="" src={data.data.sprites["front_default"]} />
      <ul>
              <li>Name: {data.data.name}</li>
              <li>ID: {data.data.id}</li>
              <li>Base Experience: {data.data.base_experience}</li>
              <li>Height: </li>
              <li>Weight: </li>
              <li>Types: {data.data.types.map((type) => type.type.name)}</li>
              <li>Stats: {data.data.stats.map((stat) => stat.stat.name)}</li>
              <li>Other Stats: {data.data.stats.map((stat) => stat.base_stat)}</li>
              <li>Abilities: {data.data.abilities.map((ability) => ability.ability.name)}</li>
            </ul>
      </Box>
    </Card>
    </Grid>
  );
};




