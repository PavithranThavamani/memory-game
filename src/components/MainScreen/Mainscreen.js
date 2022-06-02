import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";

import axios from "axios";
import AllCards from "../Card/AllCards.js";
import FetchedDataCard from "../Card/FetchedDataCard.js";

const Mainscreen = () => {
  const [buttonText, setButtonText] = useState("PLAY");
  const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState();
  const [displayTimer, setDisplayTimer] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(3);

  const classes = useStyles();

  const fetchHandler = async () => {
    const response = await axios.get("http://localhost:3000/cardData");

    setFetchData(response.data);
    console.log(response.data);
    changeCount();
    console.log("completed");
    changeHandler();
  };

  const changeCount = () => {
    if (count === 0) {
      setCount(1);
      setButtonText("Stop");
      setDisplayTimer("block");
      setIsActive(true);
    } else {
      setCount(0);
      setButtonText("Play");
      setDisplayTimer("none");
      setIsActive(false);
      setSeconds(3);
    }

    console.log(count);
  };

  const changeHandler = () => {
    console.log("Hello");
  };

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer =
        seconds > 1 &&
        setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1500);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <Box className={classes.box}>
      <div className={classes.box1}>
        {!count ? (
          <AllCards />
        ) : (
          <ul style={{ display: "flex", flexWrap: "wrap", listStyle: "none" }}>
            {fetchData &&
              fetchData.map((fetchedData, index) => {
                return (
                  <li key={index}>{<FetchedDataCard type={fetchedData} />}</li>
                );
              })}
          </ul>
        )}
      </div>
      <div className={classes.box2}>
        <Button
          className={classes.playButton}
          variant="contained"
          color="primary"
          onClick={fetchHandler}
        >
          {buttonText}
        </Button>
        <div style={{ display: displayTimer }}>
          <Avatar id="timer" className={classes.timer}>
            <Typography variant="h1" className={classes.typo2}>
              {seconds}
            </Typography>
          </Avatar>
        </div>
      </div>
    </Box>
  );
};

export default Mainscreen;
