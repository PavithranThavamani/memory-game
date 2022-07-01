import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

function ResultBar({
  correctAnswered,
  wrongAnswered,
  unanswered,
  chartData,
  setChartData,
  a,
  b,
  c,
  seta,
  setb,
  setc,
}) {
  //   const [a, seta] = useState(0);
  //   const [b, setb] = useState(0);
  //   const [c, setc] = useState(15);
  console.log("===========");

  console.log(a, b, c);

  //   const [chartData, setChartData] = useState({
  //     labels: ["Correct answers", "Wrong answers", "unanswered"],
  //     datasets: [
  //       {
  //         label: "score",
  //         data: [a, b, c],
  //         backgroundColor: "blue",
  //         barThickness: 30,
  //       },
  //     ],
  //   });
  //   useEffect(() => {
  //     //********* */
  //     console.log("CHECK", a, b, c);
  //     setChartData({
  //       labels: ["Correct answers", "Wrong answers", "unanswered"],
  //       datasets: [
  //         {
  //           label: "score",
  //           data: [a, b, c],
  //           backgroundColor: "blue",
  //           barThickness: 30,
  //         },
  //       ],
  //     });
  //   }, [a, b, c]);

  //   useEffect(() => {
  //     setChartData({
  //       labels: ["Correct answers", "Wrong answers", "unanswered"],
  //       datasets: [
  //         {
  //           label: "score",
  //           data: [a, b, c],
  //           backgroundColor: "blue",
  //           barThickness: 30,
  //         },
  //       ],
  //     });
  //   }, [correctAnswered, wrongAnswered, unanswered]);

  //   useEffect(() => {
  //     //******** */
  //     seta(correctAnswered.length);
  //     setb(wrongAnswered.length);
  //     setc(unanswered.length);

  //     console.log(
  //       `ue1 ${correctAnswered.length} ${wrongAnswered.length} ${unanswered.length}`
  //     );
  //     console.log(`ue1 ${a} ${b} ${c}`);
  //   }, [correctAnswered, wrongAnswered, unanswered]);

  //   useEffect(() => {
  //     setChartData({
  //       labels: ["Correct answers", "Wrong answers", "unanswered"],
  //       datasets: [
  //         {
  //           label: "score",
  //           data: [a, b, c],
  //           backgroundColor: "blue",
  //           barThickness: 30,
  //         },
  //       ],
  //     });
  //   }, [a, b, c]);

  return (
    <div>
      <Bar
        data={chartData}
        height="500px"
        width="350px"
        redraw
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
}

export default ResultBar;
