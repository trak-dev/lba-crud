import React, { useEffect } from "react";
import useStyles from "./styles";
import "moment/locale/fr";
import Ingredient from "./Ingredient/Ingredient";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../actions/index";
import moment from "moment";
import { CircularProgress } from "@material-ui/core";

export default function Ingredients() {
  const classes = useStyles();
  const data = useSelector((state) => Object.values(state.data));
  const dispatch = useDispatch();
  moment().locale("he");
  useEffect(() => {
    dispatch(getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (data !== undefined && data.length > 0) {
    return (
      <div className={classes.root}>
        {data.map((data) => {
          return (
            <Ingredient
              key={data._id}
              value={data.name}
              quantity={data.quantity}
              date={moment(data.lastAdded).fromNow()}
              className={classes.ingredient}
            />
          );
        })}
      </div>
    );
  } else {
    return <CircularProgress color="secondary"></CircularProgress>;
  }
}
