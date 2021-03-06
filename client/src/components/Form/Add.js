import React, { useState } from "react";
import { TextField, Box, Button, InputAdornment } from "@material-ui/core";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import { useDispatch } from "react-redux";
import BarChartIcon from "@material-ui/icons/BarChart";
import { newIngredient } from "../../actions/index";
import useStyles from "./styles";

export default function AddForm() {
  const dispatch = useDispatch();
  const editData = JSON.parse(localStorage.getItem("edit"));
  const initialState = {
    name: editData ? editData?.name : "",
    number: editData ? editData?.quantity : "",
    editing: false,
    id: editData ? editData?._id : "",
  };
  const [formData, setFormData] = useState(initialState);
  const classes = useStyles();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      formData.editing = true;
    } else {
      formData.editing = false;
    }
    dispatch(newIngredient(formData));
    clear();
  };
  const clear = () => {
    setFormData({ name: "", number: "" });
    localStorage.clear();
  };

  return (
    <div className={classes.root}>
      <h1>Ajouter un ingrédient</h1>
      <Box p={1} className={classes.border}>
        <form
          className={classes.box}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="name"
            variant="outlined"
            required
            value={formData.name}
            onChange={handleChange}
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
            value={formData.number}
            label="Quantitée"
            required
            onChange={handleChange}
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
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.space}
            onClick={clear}
          >
            Effacer
          </Button>
        </form>
      </Box>
    </div>
  );
}
