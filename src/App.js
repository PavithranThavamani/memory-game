import React from "react";
import Mainscreen from "./components/MainScreen/Mainscreen";

const App = () => {
  return (
    <div>
      <Mainscreen />
    </div>
  );
};

export default App;

// import React from "react";

// import { useTimer } from "use-timer";

// const App = () => {
//   const { time, start, pause, reset, status } = useTimer();

//   return (
//     <>
//       <div>
//         <button onClick={start}>Start</button>
//         <button onClick={pause}>Pause</button>
//         <button onClick={reset}>Reset</button>
//       </div>
//       <p>Elapsed time: {time}</p>
//       {status === "RUNNING" && <p>Running...</p>}
//     </>
//   );
// };

// export default App;
