import React from "react";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";

import useStyle from "./displaystyle";

const BlackCards = ({ type }) => {
  const classes = useStyle();

  return (
    <Card className={classes.blackCard1}>
      <CardContent className={classes.content}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Avatar className={classes.avatarColor1}>
            <Button
              onClick={() => {
                console.log("clicked");
              }}
            ></Button>
          </Avatar>
          <Avatar className={classes.avatarColor2}>.</Avatar>
        </div>
        <div>
          <Avatar className={classes.avatarBlack}>.</Avatar>
        </div>
        <Typography className={classes.name} variant="h6">
          {type.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlackCards;
