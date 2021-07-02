import React from "react";
import useStyles from "./styles";
import Ingredient from "./Ingredient/Ingredient";

export default function Ingredients() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Ingredients (liste)</h2>
      <Ingredient />
    </div>
  );
}
