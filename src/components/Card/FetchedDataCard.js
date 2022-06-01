import React from "react";
import { Card, CardContent, Avatar } from "@material-ui/core";

import useStyle from "./fetcheddatacardstyle";

const FetchedDataCard = () => {
  const classes = useStyle();

  return (
    <Card className={classes.card1}>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}>.</Avatar>
      </CardContent>
    </Card>
  );
};

export default FetchedDataCard;
