import React, { useState } from "react";
import useStyles from "./styles";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { searchItem } from "../../actions/index";

export default function SearchBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      //chercher la cathegorie actuelle / la recherche
      dispatch(searchItem(search));
    }
  };

  return (
    <div className={classes.searchbar}>
      <TextField
        className={classes.search}
        autoComplete="off"
        name="search"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
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
