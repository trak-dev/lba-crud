import React from "react";
import { TextField, Box, Button, InputAdornment } from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import BarChartIcon from "@material-ui/icons/BarChart";
import useStyles from "./styles";

export default function AddForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Ajouter un ingrédient</h1>
      <Box p={1} className={classes.border}>
        <form
          className={classes.box}
          noValidate
          autoComplete="off"
          method="POST"
          action=""
        >
          <TextField
            id="name"
            variant="outlined"
            label="Nom de l'ingrédient"
            className={classes.space}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FastfoodIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            id="number"
            variant="outlined"
            type="number"
            label="Quantitée"
            className={classes.space}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <BarChartIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.space}
          >
            Ajouter
          </Button>
        </form>
      </Box>
    </div>
  );
}
