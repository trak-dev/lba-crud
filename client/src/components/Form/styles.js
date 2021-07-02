import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  border: { border: "1px solid grey", borderRadius: "10px" },
  root: {
    width: "50%",
    textAlign: "center",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  space: {
    marginTop: "20px",
    width: "40%",
  },
}));
