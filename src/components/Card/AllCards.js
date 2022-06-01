import React from "react";
import DisplayCard from "./DisplayCard";

import useStyle from "./allcardstyle";

const AllCards = () => {
  const classes = useStyle();

  return (
    <div className={classes.card1}>
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
      <DisplayCard />
    </div>
  );
};

export default AllCards;
