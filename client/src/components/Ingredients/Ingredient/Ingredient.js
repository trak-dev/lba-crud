import React from "react";
import useStyles from "./styles";

export default function Ingredient() {
  const classes = useStyles();

  return <div className={classes.root}>Ingrédient</div>;
}
