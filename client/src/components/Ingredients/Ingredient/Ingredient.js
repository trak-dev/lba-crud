import React from "react";
import { Paper, Typography, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { deleteItem, changeQuantity } from "../../../actions";
import moment from "moment";

export default function Ingredient(item) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = item.item;
  moment().locale("fr");

  return (
    <Paper elevation={3} className={classes.root}>
      <div className={classes.left}>
        <Typography variant="h5">{data.name} : </Typography>
        <Typography variant="h5">&nbsp;{data.quantity}</Typography>
      </div>
      <div className={classes.spacers}>
        <Typography variant="h5">
          {" "}
          dernier ingrédient ajouté {moment(data.lastAdded).fromNow()}
        </Typography>
      </div>
      <div className={classes.right}>
        {" "}
        <IconButton
          onClick={() =>
            dispatch(changeQuantity(data._id, { operation: "minus" }))
          }
        >
          <RemoveIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton
          onClick={() =>
            dispatch(changeQuantity(data._id, { operation: "more" }))
          }
        >
          <AddIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton>
          <EditIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton onClick={() => dispatch(deleteItem(data._id))}>
          <DeleteForeverIcon fontSize="large" color="secondary" />
        </IconButton>
      </div>
    </Paper>
  );
}
