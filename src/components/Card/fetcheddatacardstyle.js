import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  card1: {
    backgroundColor: "#d5d5d5",
    margin: "10px",
    width: "120px",
    height: "160px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    // marginLeft: "-17px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  avatar: {
    // paddingTop: "10px",
    marginTop: "10px",
    width: "80px",
    height: "80px",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },

  typo1: {
    marginTop: "10px",
    color: "white",
    textAlign: "center",
  },
});
