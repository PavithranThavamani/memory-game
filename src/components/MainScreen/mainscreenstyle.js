import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  box: {
    transform: "scale(0.9)",
    // border: "1px solid black",
    // margin: "20px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 10px",
    // height: "490px",
    // width: "1100px",
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
    border: "1px solid black",
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
