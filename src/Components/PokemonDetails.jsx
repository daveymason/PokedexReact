import * as React from "react";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

export const PokemonDetails = (data) => {

  let typeColor = {
    normal: "#A8A77A",
    fighting: "#C22E28",
    flying: "#A98FF3",
    poison: "#A33D40",
    ground: "#E2BF65",
    rock: "#B8A038",
    bug: "#A6B91A",
    ghost: "#735797",
    steel: "#B7B7CE",
    fire: "#EE8130",
    water: "#6390F0",
    grass: "#7AC74C",
    electric: "#F7D02C",
    psychic: "#F95587",
    ice: "#96D9D6",
    dragon: "#6F35FC",
    dark: "#705746",
    fairy: "#D685AD",
  };

  return (
    <Grid container justifyContent="space-evenly" direction="row">
      <Card sx={{ textTransform: "capitalize" }}>
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems={"center"}
          >
            <Grid item xs={3}>
              <Typography variant="h3">{data.data.name}</Typography>
              <Box p={1} flex={"auto"}>
                {data.data.types.length > 0
                  ? data.data.types.map((type, index) => {
                      return (
                        <Typography key={index} variant="p" sx={{color: typeColor[type.type.name]}}>
                          {type.type.name}{" "}
                          {index !== data.data.types.length - 1 ? " / " : ""}
                        </Typography>
                      );
                    })
                  : ""}
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                alt=""
                src={data.data.sprites["front_default"]}
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[0].stat.name}</p>
            <p>{data.data.stats[0].base_stat}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[1].stat.name}</p>
            <p>{data.data.stats[1].base_stat}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[2].stat.name}</p>
            <p>{data.data.stats[2].base_stat}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[3].stat.name}</p>
            <p>{data.data.stats[3].base_stat}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[4].stat.name}</p>
            <p>{data.data.stats[4].base_stat}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>{data.data.stats[5].stat.name}</p>
            <p>{data.data.stats[5].base_stat}</p>
          </Box>
        </Box>
        <Divider light />
        <Box display={"flex"}>
          <Box p={2} flex={"auto"}>
            <p>Height</p>
            <p>{data.data.height}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>Weight</p>
            <p>{data.data.weight}</p>
          </Box>
          <Box p={2} flex={"auto"}>
            <p>Experience</p>
            <p>{data.data.base_experience}</p>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
};
