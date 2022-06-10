import React, { useEffect, useState } from "react";
// import { useTimer } from "use-timer";
import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp, count, setDisplayTimer, setDataSet }) {
  const [main, setMain] = useState(false);
  console.log(setDataSet);
  const { seconds, isRunning, start, pause, resume, restart, setIsRunning } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        setDisplayTimer("none");
        setDataSet(1);
      },
    });
  // console.log("asd" + count);
  useEffect(() => {
    if (count === 0) pause();
    else {
      const time = new Date();
      time.setSeconds(time.getSeconds() + 3);
      restart(time);
      // console.log("check");
      // resume();
    }
  }, [count]);

  return (
    <div>
      {console.log(isRunning, seconds)}

      <p style={{ marginTop: "330px" }}>{seconds}</p>
      {/* <p>{isRunning ? "Running" : "Not running"}</p> */}
      {/* <div style={{ fontSize: "100px" }}>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={resume}>Resume</button>
        <button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 3);
            restart(time);
            setMain(false);
          }}
        >
          Restart
        </button> */}
      {/* {main && <Mainscreen />} */}
    </div>
  );
}

export default MyTimer;
