import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  searchbar: { width: "80%" },
  search: { marginTop: "20px" },
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
