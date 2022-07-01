import React, { useEffect, useState } from "react";

import { Avatar, Box, Button, Typography } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";
import axios from "axios";
import AllCards from "../Card/AllCards.js";
import FetchedDataCard from "../Card/FetchedDataCard.js";

import MyTimer from "./MyTimer.js";
import BlackCards from "../Card/BlackCards.js";

import ResultBar from "./ResultBar.js";

import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Mainscreen = () => {
  const [buttonText, setButtonText] = useState("PLAY");
  const [count, setCount] = useState(0);
  const [fetchData, setFetchData] = useState();
  const [displayTimer, setDisplayTimer] = useState("none");
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(3);
  const [dummy, setDummy] = useState(0);
  const [dataSet, setDataSet] = useState(0);
  const [timerVisiblity, setTimerVisiblity] = useState(0);
  const [correctAnswered, setCorrectAnswered] = useState([]);
  const [wrongAnswered, setWrongAnswered] = useState([]);
  const [unanswered, setUnanswered] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);

  const [a, seta] = useState(0);
  const [b, setb] = useState(0);
  const [c, setc] = useState(15);

  const [chartData, setChartData] = useState({
    labels: ["Correct answers", "Wrong answers", "unanswered"],
    datasets: [
      {
        label: "score",
        data: [a, b, c],
        backgroundColor: "blue",
        barThickness: 30,
      },
    ],
  });

  const classes = useStyles();

  const time = new Date();
  time.setSeconds(time.getSeconds() + 3);

  const fetchHandler = async () => {
    const response = await axios.get("http://localhost:3000/cardData");

    setFetchData(response.data);
    setCorrectAnswered([]);
    setWrongAnswered([]);
    setUnanswered([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);

    changeCount();
    getArray();
  };

  const getArray = () => {
    let array = [];
    let colorArray = [];
    if (dummy === 0) {
      for (let i = 0; i < 15; i++) {
        array.push(Math.floor(Math.random() * 27));
        colorArray.push(Math.floor(Math.random() * 2));
      }

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
      setIsActive(true);
      seta(correctAnswered.length);
      setb(wrongAnswered.length);
      setc(unanswered.length);
    } else {
      setCount(0);
      setButtonText("Play");
      time.setSeconds(time.getSeconds() + 3);
      setDisplayTimer("none");
      setTimerVisiblity(0);
      setSeconds(3);
      setDataSet(0);
      setIsActive(false);
      seta(0);
      setb(0);
      setc(15);
    }
  };
  let i = 0;

  let dataCount = 0;

  useEffect(() => {
    seta(correctAnswered.length);
    setb(wrongAnswered.length);
    setc(unanswered.length);
  }, [a, b, c, correctAnswered, wrongAnswered, unanswered]);

  useEffect(() => {
    seta(correctAnswered.length);
    setb(wrongAnswered.length);
    setc(unanswered.length);
  }, [a, b, c]);

  useEffect(() => {}, [a, b, c, correctAnswered, wrongAnswered, unanswered]);

  useEffect(() => {
    setChartData({
      labels: ["Correct answers", "Wrong answers", "unanswered"],
      datasets: [
        {
          label: "score",
          data: [a, b, c],
          backgroundColor: "blue",
          barThickness: 30,
        },
      ],
    });
  }, [a, b, c]);

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
                        <BlackCards
                          cardid={index}
                          type={getData}
                          setCorrectAnswered={setCorrectAnswered}
                          setWrongAnswered={setWrongAnswered}
                          setUnanswered={setUnanswered}
                          correctAnswered={correctAnswered}
                          wrongAnswered={wrongAnswered}
                          unanswered={unanswered}
                        />
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
          <div>
            {/* <ResultBar
              correctAnswered={correctAnswered}
              wrongAnswered={wrongAnswered}
              unanswered={unanswered}
              setCorrectAnswered={setCorrectAnswered}
              setWrongAnswered={setWrongAnswered}
              chartData={chartData}
              setChartData={setChartData}
              a={a}
              b={b}
              c={c}
              seta={seta}
              setb={setb}
              setc={setc}
            /> */}

            <Bar
              data={chartData}
              height="500px"
              width="350px"
              redraw
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                responsive: true,
                scales: {
                  y: {
                    max: 15,
                    min: 0,
                    ticks: {
                      stepSize: 1,
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </Box>
  );
};

export default Mainscreen;
