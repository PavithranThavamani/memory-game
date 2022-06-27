import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";
import axios from "axios";
import AllCards from "../Card/AllCards.js";
import FetchedDataCard from "../Card/FetchedDataCard.js";
// import Timer from "./MyTimer.js";
import MyTimer from "./MyTimer.js";
import BlackCards from "../Card/BlackCards.js";

import ResultBar from "./ResultBar.js";
// const timerBox = document.getElementById("displayTimerContent");
const Mainscreen = React.memo(() => {
  const [buttonText, setButtonText] = useState("PLAY");
  const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState();
  const [displayTimer, setDisplayTimer] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [dummy, setDummy] = useState(0);
  const [dataSet, setDataSet] = useState(0);
  const [timerVisiblity, setTimerVisiblity] = useState(0);
  const classes = useStyles();
  // useEffect(() => {}, []);
  const time = new Date();
  time.setSeconds(time.getSeconds() + 3);
  // const expiryTimestamp = time;
  const fetchHandler = async () => {
    const response = await axios.get("http://localhost:3000/cardData");

    setFetchData(response.data);
    // console.log(response.data);

    changeCount();
    getArray();
  };

  // useEffect((e) => {
  //   e.preventDefault();
  // }, []);

  const getArray = () => {
    let array = [];
    let colorArray = [];
    if (dummy === 0) {
      for (let i = 0; i < 15; i++) {
        array.push(Math.floor(Math.random() * 27));
        colorArray.push(Math.floor(Math.random() * 2));
      }
      // setSet(array);
      setDummy(1);
      localStorage.setItem("array", array);
      localStorage.setItem("colorArray", colorArray);
    }
    console.log(array);
    console.log(colorArray);
  };

  const changeCount = () => {
    if (count === 0) {
      setCount(1);
      setButtonText("Stop");

      setDisplayTimer("block");
      // setTimerVisiblity(1);
      setIsActive(true);
    } else {
      setCount(0);
      setButtonText("Play");

      time.setSeconds(time.getSeconds() + 3);

      setDisplayTimer("none");
      setSeconds(3);
      setDataSet(0);
      setIsActive(false);
      console.log("frefer");
      // localStorage.clear();
    }
  };
  let i = 0;
  // console.log(isActive);
  let dataCount = 0;
  let timer = null;
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
                  let newArray = localStorage.getItem("array").split(",");
                  let newColorArray = localStorage
                    .getItem("colorArray")
                    .split(",");
                  // console.log(newArray);

                  const getData = fetchData[parseInt(newArray[i])];
                  let j = i;
                  i = i + 1;
                  dataCount = dataCount + 1;

                  return (
                    <li key={index}>
                      {dataSet === 0 ? (
                        <FetchedDataCard
                          type={getData}
                          colorIndex={parseInt(newColorArray[j])}
                        />
                      ) : (
                        <BlackCards type={getData} />
                      )}
                    </li>
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
        {timerVisiblity === 0 ? (
          <div id="displayTimerContent" style={{ display: displayTimer }}>
            <Avatar id="timer" className={classes.timer}>
              <Typography variant="h1" className={classes.typo2}>
                {{ isActive } && (
                  <MyTimer
                    expiryTimestamp={time}
                    count={count}
                    setDisplayTimer={setDisplayTimer}
                    setDataSet={setDataSet}
                    setTimerVisiblity={setTimerVisiblity}
                  />
                )}
                {seconds}
              </Typography>
            </Avatar>
          </div>
        ) : (
          <div className={classes.resultBarStyle}>
            <ResultBar />
          </div>
        )}
      </div>
    </Box>
  );
});

export default Mainscreen;
