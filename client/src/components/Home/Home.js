import React from "react";
import useStyles from "./styles";
import AddForm from "../Form/Add.js";
import SearchBar from "../Searchbar/Searchbar";
import Ingredients from "../Ingredients/Ingredients";

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AddForm />
      <SearchBar />
      <h1>Liste des ingrédients</h1>
      {}
      <Ingredients />
    </div>
  );
}
