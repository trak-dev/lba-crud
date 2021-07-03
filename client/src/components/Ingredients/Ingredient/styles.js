import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "80%",
    marginTop: "20px",
    border: "1px solid black",
    padding: "20px",
    display: "flex",
  },
  left: {
    width: "33%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  right: {
    width: "33%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  spacers: {
    width: "33%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
