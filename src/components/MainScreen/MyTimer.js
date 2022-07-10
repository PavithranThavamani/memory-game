import React, { useEffect } from "react";

import { useTimer } from "react-timer-hook";

function MyTimer({
  expiryTimestamp,
  count,
  setDisplayTimer,
  setDataSet,
  setTimerVisiblity,
  // newArray
}) {

  // let newArray = localStorage.getItem("array")
  const { seconds, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setDisplayTimer("none");
      //  newArray.sort((a, b) => 0.5 - Math.random());
      // localStorage.setItem("array",newArray)
      arrayHandler()
      setDataSet(1);

      setTimerVisiblity(1);
      // let dataArray = localStorage.getItem("array").split(',')
    },
  });

  useEffect(() => {
    if (count === 0) pause();
    else {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 3);
      restart(time);
    }
  }, [count]);

  const arrayHandler = () => {
    let newArray = localStorage.getItem("array").split(",")
    console.log(newArray)
    newArray.sort((a, b) => 0.5 - Math.random());
    localStorage.setItem("array",newArray)
    console.log(newArray)
  }

  return (
    <div>
      <p style={{ marginTop: "330px" }}>{seconds}</p>
    </div>
  );
}

export default MyTimer;
