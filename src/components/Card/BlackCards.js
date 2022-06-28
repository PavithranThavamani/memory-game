import React, { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
  rgbToHex,
} from "@material-ui/core";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";

import useStyle from "./displaystyle";

const BlackCards = ({ type }) => {
  const [count, setCount] = useState(0);
  const [colorValue, setColorValue] = useState(0);

  const classes = useStyle();

  const leftColorCompareHandler = () => {
    console.log("Left");

    let getColorArray = localStorage.getItem("colorArray").split(",");

    let cardColor = document.getElementById("greenCard");
    let style = getComputedStyle(cardColor);
    let avatar1Color = style["backgroundColor"];
    let hex = rgbToHex(avatar1Color);
    console.log(hex);

    if (hex == "#00c853") {
      console.log("Green");
      document.getElementById("blackCard").style.backgroundColor = "#00c853";
    }
  };

  const rightColorCompareHandler = () => {
    console.log("Right");

    let getColorArray = localStorage.getItem("colorArray").split(",");

    let cardColor = document.getElementById("redCard");
    let style = getComputedStyle(cardColor);
    let avatar1Color = style["backgroundColor"];
    let hex = rgbToHex(avatar1Color);
    console.log(hex);

    if (hex == "#ff0000") {
      console.log("Red");
    }
  };

  // const leftColorCompareHandler = () => {
  //   console.log("Left");
  //   let getColorArray = localStorage.getItem("colorArray").split(",");

  //   let cardColor = document.getElementById("greenCard");
  //   let style = getComputedStyle(cardColor);
  //   let avatar1Color = style["backgroundColor"];
  //   let hex = rgbToHex(avatar1Color);
  //   if (hex === "#00c853") {
  //     // const colorValue = 0;
  //     setColorValue(0);
  //     console.log("green");
  //     console.log(colorValue);
  //   } else {
  //     // const colorValue = 1;
  //     setColorValue(1);
  //     console.log("red");
  //     console.log(colorValue);
  //   }

  //   console.log(getColorArray[0]);
  //   console.log(typeof getColorArray[0]);

  //   if (colorValue == getColorArray[0]) {
  //     console.log("true");
  //     document.getElementById("blackCard").style.backgroundColor = "#00c853";
  //     document.getElementById("redCard").style.display = "none";
  //   } else {
  //     console.log("false");
  //     document.getElementById("blackCard").style.backgroundColor = "red";
  //     document.getElementById("greenCard").style.display = "none";
  //   }
  // };

  // const rightColorCompareHandler = () => {
  //   console.log("Right");
  //   let getColorArray = localStorage.getItem("colorArray").split(",");
  //   let cardColor = document.getElementById("redCard");
  //   let style = getComputedStyle(cardColor);
  //   let avatar2Color = style["backgroundColor"];
  //   let hex = rgbToHex(avatar2Color);
  //   console.log(typeof colorValue);
  //   if (hex === "#00c853") {
  //     // let colorValue = 0;
  //     setColorValue(0);
  //     console.log("green");
  //     console.log(colorValue);
  //   } else {
  //     // let colorValue = 1;
  //     setColorValue(1);
  //     console.log("red");
  //     console.log(colorValue);
  //   }

  //   console.log(getColorArray[0]);
  //   console.log(typeof getColorArray[0]);

  //   if (colorValue == getColorArray[0]) {
  //     console.log("true");
  //     document.getElementById("blackCard").style.backgroundColor = "red";
  //     document.getElementById("greenCard").style.display = "none";
  //   } else {
  //     console.log("false");
  //     document.getElementById("blackCard").style.backgroundColor = "#00c853";
  //     document.getElementById("redCard").style.display = "none";
  //   }
  // };

  return (
    <Card id="blackCard" className={classes.blackCard1}>
      <CardContent className={classes.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar className={classes.avatarColor1} id="greenCard">
            <Button onClick={leftColorCompareHandler}></Button>
          </Avatar>
          <Avatar className={classes.avatarColor2} id="redCard">
            <Button onClick={rightColorCompareHandler}></Button>
          </Avatar>
        </div>
        <div>
          <Avatar className={classes.avatarBlack} style={{ color: "black" }}>
            <div>
              {type.type === "city" ? (
                <LocationCityIcon fontSize="large" />
              ) : (
                <FlagIcon fontSize="large" />
              )}
            </div>
          </Avatar>
        </div>
        <Typography className={classes.name} variant="h6">
          {type.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlackCards;
