import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core";

import useStyle from "./displaystyle";

const DisplayCard = () => {
  const classes = useStyle();

  return (
    <div>
      <Card className={classes.card1}>
        <CardContent className={classes.content}>
          <Avatar className={classes.avatar}>.</Avatar>
        </CardContent>
      </Card>
    </div>
  );
};

export default DisplayCard;
