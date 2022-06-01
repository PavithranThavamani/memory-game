import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  box: {
    transform: "scale(0.9)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px",
  },

  box1: {
    width: "700px",
    height: "550px",
    border: "2px solid black",
    overflow: "auto",
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "40px",
  },

  box2: {
    width: "300px",
    height: "550px",
    border: "2px solid black",
    borderLeft: 0,
    textAlign: "center",
  },

  playButton: {
    margin: "50px",
    padding: "5px 50px",
    backgroundColor: "#a9c4d9",
    color: "black",
    fontWeight: "700",

    "&:hover": {
      backgroundColor: "#a9c4d9",
    },
  },
}));
