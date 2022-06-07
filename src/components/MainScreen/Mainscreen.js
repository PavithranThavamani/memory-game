import React, { useState } from "react";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";

import axios from "axios";
import AllCards from "../Card/AllCards.js";
import FetchedDataCard from "../Card/FetchedDataCard.js";
import Timer from "./Timer.js";

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
    // console.log(response.data);

    changeCount();
  };

  const changeCount = () => {
    setSeconds(3);
    console.log(seconds);
    if (count === 0) {
      setCount(1);
      setButtonText("Stop");
      setDisplayTimer("block");
      // setSeconds(3)
      setIsActive(true);
      console.log(`seconds - ${seconds}`);
    } else {
      setCount(0);
      setButtonText("Play");
      setDisplayTimer("none");
      // setSeconds(3);
      setIsActive(false);
    }

    console.log(count);
    console.log(`inside change count - ${seconds}`);
  };

  let dataCount = 0;

  const time = new Date();
  time.setSeconds(time.getSeconds() + 10);

  // console.log(time);

  console.log(`before excecuting - ${seconds}`);

  const handler = () => {
    console.log("DONNNNNE");
  };

  return (
    <Box className={classes.box}>
      <div className={classes.box1}>
        {!count ? (
          <AllCards />
        ) : (
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {fetchData &&
              fetchData.map((fetchedData, index) => {
                if (dataCount < 15) {
                  // console.log("here");
                  const getData =
                    fetchData[Math.floor(Math.random() * fetchData.length)];
                  // console.log(getData);
                  // console.log();
                  dataCount = dataCount + 1;
                  // console.log(dataCount);
                  console.log(seconds);
                  return (
                    <li key={index}>{<FetchedDataCard type={getData} />}</li>
                  );
                }
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
              {console.log(seconds)}
              <Timer isActive={isActive} countDownStartsFrom={seconds} />
              {console.log("Helo")}
              {handler}
              {/* {setDisplayTimer("none")} */}
              {/* <Timer /> */}
            </Typography>
          </Avatar>
        </div>
      </div>
    </Box>
  );
};

export default Mainscreen;
