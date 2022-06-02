import React from "react";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import FlagIcon from "@material-ui/icons/Flag";

import useStyle from "./fetcheddatacardstyle";

const FetchedDataCard = ({ type }) => {
  const classes = useStyle();

  return (
    <Card className={classes.card1}>
      <CardContent className={classes.content}>
        <Avatar className={classes.avatar}>
          <div>
            {type.type === "city" ? (
              <LocationCityIcon fontSize="large" />
            ) : (
              <FlagIcon fontSize="large" />
            )}
          </div>
        </Avatar>
        <Typography className={classes.typo1} variant="h6">
          {type.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FetchedDataCard;
