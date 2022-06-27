import React, { Component } from "react";

import { Bar } from "react-chartjs-2";

import { withStyles } from "@material-ui/core/styles";
// import { Chart } from "react-chartjs-2";
// import { CategoryScale } from "chart.js";
// Chart.register(CategoryScale);

import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";

const useStyles = () => ({
  //   barStyle: {
  //     height: "190px",
  //     width: "400px",
  //   },
});

class ResultBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Correct answers", "Wrong answers", "unanswered"],
        datasets: [
          {
            label: "score",
            data: [0, 0, 15],
            backgroundColor: "blue",
            barThickness: 30,
          },
        ],
      },
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Bar
          className={classes.barStyle}
          data={this.state.chartData}
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

              //   y: {
              //     beginAtZero: true,
              //     suggestedMax: 15,
              //   },
              //   ticks: {
              //     stepSize: 1,
              //   },
              //   yAxes: [
              //     {
              //       ticks: {
              //         beginAtZero: true,
              //         min: 0,
              //         max: 15,
              //         stepSize: 1,
              //       },
              //     },
              //   ],
            },
          }}
        />
      </div>
    );
  }
}

export default withStyles(useStyles)(ResultBar);
// export default ResultBar;
