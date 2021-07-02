import React from "react";
import useStyles from "./styles";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function SearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.searchbar}>
      <TextField
        className={classes.search}
        autoComplete="off"
        name="search"
        variant="outlined"
        label="Votre recherche ici..."
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
