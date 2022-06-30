// import React, { Component } from "react";

// import { Bar } from "react-chartjs-2";

// import { Chart as ChartJS } from "chart.js/auto";
// import { Chart } from "react-chartjs-2";

// class ResultBar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chartData: {
//         labels: ["Correct answers", "Wrong answers", "unanswered"],
//         datasets: [
//           {
//             label: "score",
//             data: [0, 0, 15],
//             backgroundColor: "blue",
//             barThickness: 30,
//           },
//         ],
//       },
//     };
//   }
//   componentDidMount() {
//     const correct = this.props.correctAnswered;
//     const wrong = this.props.wrongAnswered;
//     console.log(correct, wrong);
//     correct == false ? setCorrectAnswered(true) : setCorrectAnswered(false);
//     wrong == false ? setWrongAnswered(true) : setWrongAnswered(false);
//   }

//   render() {
//     // const { correctAnswered, wrongAnswered } = this.props;
//     return (
//       <div>
//         <Bar
//           data={this.state.chartData}
//           height="500px"
//           width="350px"
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//               legend: {
//                 display: false,
//               },
//             },

//             responsive: true,
//             scales: {
//               y: {
//                 max: 15,
//                 min: 0,
//                 ticks: {
//                   stepSize: 1,
//                 },
//               },
//             },
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default ResultBar;

import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const ResultBar = ({
  correctAnswered,
  wrongAnswered,
  setCorrectAnswered,
  setWrongAnswered,
}) => {
  const [correctData, setCorrectData] = useState(0);
  const [wrongData, setWrongData] = useState(0);
  const [flag, setFlag] = useState(0);

  //   const correctDataArray = [];
  //   const wrongDataedArray = [];
  //   const unansweredDataArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const correctDataArray = [];
  const wrongDataArray = [];
  const unansweredDataArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const arrayHandler = () => {
    if (correctAnswered == true) {
      correctDataArray.push(1);
      unansweredDataArray.pop();
    } else {
      wrongDataArray.push(1);
      unansweredDataArray.pop();
    }
  };

  const [chartData, setChartData] = useState({
    labels: ["Correct answers", "Wrong answers", "unanswered"],
    datasets: [
      {
        label: "score",
        data: [
          correctDataArray.length,
          wrongDataArray.length,
          unansweredDataArray.length,
        ],
        // data: dataArray,
        backgroundColor: "blue",
        barThickness: 30,
      },
    ],
  });
  console.log(correctData, wrongData);

  console.log("entered");

  useEffect(() => {
    console.log(correctAnswered, wrongAnswered);
    // answerHandler();
    arrayHandler();
  }, []);

  return (
    <div>
      <Bar
        data={chartData}
        height="500px"
        width="350px"
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },

          responsive: true,
          scales: {
            y: {
              max: 15,
              min: 0,
              ticks: {
                stepSize: 1,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ResultBar;
