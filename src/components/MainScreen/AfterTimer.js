import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import Mainscreen from "./Mainscreen";
import Mainscreenstyle from "./mainscreenstyle";

function MyTimer({ expiryTimestamp }) {
  const [main, setMain] = useState(false);
  const { seconds, isRunning, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => setMain(true),
  });

  return (
    <div>
      {console.log(seconds)}
      <p>{seconds}</p>
      <p>{isRunning ? "Running" : "Not running"}</p>
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
// function App() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 3); // 10 minutes timer

//   return (
//     <div>
//       <MyTimer expiryTimestamp={time} />
//     </div>
//   );
// }
