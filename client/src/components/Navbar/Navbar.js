import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h2" noWrap>
            <Typography className={classes.link}>
              GESTION DE MES INGRÉDIENTS
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
