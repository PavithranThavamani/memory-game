import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";

const Timer = ({ isActive, countDownStartsFrom }) => {
  //   const { time, start, pause, reset, status } = useTimer({
  //     endTime,
  //     onTimeOver: () => {
  //       console.log("Time is over");
  //     },
  //   });

  console.log(countDownStartsFrom);
  const [timerSeconds, setTimerSeconds] = useState(3);
  console.log(timerSeconds);

  //   if (timerSeconds === 1) {
  //     setTimerSeconds(3);
  //     console.log(`reset into - ${timerSeconds}`);
  //   }
  //   setTimerSeconds(3);

  useEffect(() => {
    let timer = null;
    if (isActive) {
      timer =
        timerSeconds > 1 &&
        setInterval(() => {
          console.log(timerSeconds);
          //   setTimeout(console.log("hello"),3000);
          setTimerSeconds((timerSeconds) => timerSeconds - 1);
        }, 1500);
    }

    return () => {
      clearInterval(timer);
    };
  });

  return <div>{timerSeconds} </div>;
};

export default Timer;

// import React from "react";

// const Timer = (callback) => {
//   setTimeout(callback, 6000);
//   console.log("Doing");
//   return <p>doing</p>;
// };

// Timer(function () {
//   console.log("Done");
// });

// export default Timer;
