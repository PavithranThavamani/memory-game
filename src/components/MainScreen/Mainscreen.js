import React, { useState } from "react";

import { Box, Button } from "@material-ui/core";

import useStyles from "./mainscreenstyle.js";

import axios from "axios";
import AllCards from "../Card/AllCards.js";
import FetchedDataCard from "../Card/FetchedDataCard.js";

const Mainscreen = () => {
  const [buttonText, setButtonText] = useState("PLAY");

  const [count, setCount] = useState(0);

  const [fetchData, setFetchData] = useState();

  const classes = useStyles();

  const fetchHandler = async () => {
    const response = await axios.get("http://localhost:3000/cardData");

    setFetchData(response.data);
    console.log(response.data);
    changeCount();
  };

  const changeCount = () => {
    if (count === 0) {
      setCount(1);
      setButtonText("Stop");
    } else {
      setCount(0);
      setButtonText("Play");
    }

    console.log(count);
  };

  return (
    <Box className={classes.box}>
      <div className={classes.box1}>
        {!count ? (
          <AllCards />
        ) : (
          <ul style={{ display: "flex", flexWrap: "wrap" }}>
            {fetchData &&
              fetchData.map((fetchedData, index) => {
                return (
                  <li key={index}>
                    {/* <h1>{fetchedData.type} </h1>
                    <h1>{fetchedData.name} </h1>
                    <h1>{fetchedData.id} </h1> */}
                    {<FetchedDataCard />}
                  </li>
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
      </div>
    </Box>
  );
};

export default Mainscreen;
