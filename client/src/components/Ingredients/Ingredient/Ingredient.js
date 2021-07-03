import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../../actions";

export default function Ingredient({ value, quantity, date, id }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.left}>
        <Typography variant="h5">{value} : </Typography>
        <Typography variant="h5"> {quantity}</Typography>
      </div>
      <div className={classes.spacers}>
        <Typography variant="h5">
          {" "}
          dernier ingrédient ajouté il y as {date} .
        </Typography>
      </div>
      <div className={classes.right}>
        {" "}
        <IconButton>
          <AddIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton>
          <RemoveIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton>
          <EditIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton onClick={() => dispatch(deleteItem(id))}>
          <DeleteForeverIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
    </Paper>
  );
}
