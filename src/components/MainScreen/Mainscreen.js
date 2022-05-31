import React from "react";

import { Box, Button } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";
import DisplayCard from "../Card/DisplayCard.js";

const Mainscreen = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <div className={classes.box1}>
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
        <DisplayCard />
      </div>
      <div className={classes.box2}>
        <Button
          className={classes.playButton}
          variant="contained"
          color="primary"
        >
          Play
        </Button>
      </div>
    </Box>
  );

  // return <Container className={classes.container}>Hello</Container>;
};

export default Mainscreen;
