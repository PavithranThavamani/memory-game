import React, { useEffect } from "react";

import { useTimer } from "react-timer-hook";

function MyTimer({
  expiryTimestamp,
  count,
  setDisplayTimer,
  setDataSet,
  setTimerVisiblity,
}) {
  const { seconds, pause, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => {
      setDisplayTimer("none");
      setDataSet(1);

      setTimerVisiblity(1);
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

  return (
    <div>
      <p style={{ marginTop: "330px" }}>{seconds}</p>
    </div>
  );
}

export default MyTimer;
