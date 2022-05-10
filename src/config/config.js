const config = {
  datasetKeys: [
    {
      type: 0,
      description: "AM/W Template",
      keys: [
        "Pressures",
        "Tkl+Int",
        "Aerials won",
        "% of Aerials Won",
        //

        "Passes into Final Third",
        "Carries into Final Third",
        "Progressive Passes Rec",
        "Pass Completion %",
        //
        "Touches (Att Pen)",
        "xA",
        "npxG",
        "Passes into Penalty Area",
        //"Box Entries", //"Passes into Penalty Area", //Replaced passes into box with box entries
        //
        "Crosses",
        "Dribbles Attempted",
        "Successful Dribble %",
        "Fouls Drawn",
      ],
    },
    {
      type: 1,
      description: "CB Template",
      keys: [
        "Tackles",
        "% of dribblers tackled",
        "Dribbled Past",
        "Fouls Committed",
        //
        "Interceptions",
        "Pressures",
        "Clearances",
        "Dispossessed",
        //
        "Passes Attempted (Long)",
        "Pass Completion % (Long)",
        "Pass Completion %",
        "Progressive Passing Distance",
        //
        "Aerials won",
        "% of Aerials Won",
        "Dribbles Completed",
        "Touches (Att Pen)",
      ],
    },
    {
      type: 2,
      description: "CM Template",
      keys: [
        "Tackles",
        "% of dribblers tackled",
        "Interceptions",
        "Pressures",
        //
        "Progressive Carrying Distance",
        "Progressive Passing Distance",
        "Pass Completion %",
        "Passes Completed (Long)",
        //
        "Passes into Final Third",
        "Touches (Att 3rd)",
        "xA",
        "npxG",
        //
        "Carries into Final Third",
        "Dribbles Completed",
        "Successful Dribble %",
        "% of Aerials Won",
      ],
    },
    {
      type: 3,
      description: "FW Template",
      keys: [
        "Pressures",
        "Tkl+Int",
        "Aerials won",
        "% of Aerials Won",
        //
        "Passes Received",
        "Progressive Passes Rec",
        "Passes Completed",
        "xA",
        //
        "Touches (Att Pen)",
        "npxG",
        "npxG/Sh",
        "Goals",
        //
        "Carries into Penalty Area",
        "Fouls Drawn",
        "Dribbles Attempted",
        "Successful Dribble %",
      ],
    },
    {
      type: 4,
      description: "FB/WB Template",
      keys: [
        "Tackles",
        "% of dribblers tackled",
        "Interceptions",
        "Pressures",
        //
        "Progressive Carrying Distance",
        "Progressive Passes Rec",
        "Pass Completion %",
        "Dispossessed",
        //

        "Passes into Penalty Area",
        "xA",
        "Crosses into Penalty Area",
        "npxG",
        //
        "Aerials won",
        "% of Aerials Won",
        "Dribbles Completed",
        "Fouls Drawn",
      ],
    },
    {
      type: 5,
      description: "GK Template",
      keys: [
        "Passes Attempted",
        "Average Pass Length",
        "Avg. Length of Goal Kicks",
        "Launch%",
        "Pass Completion Percentage (Launched)",
        "Throws Attempted",
        //
        "PSxG",
        "Saves",
        "PSxG-GA",
        "Save% (Penalty Kicks)",
        //
        "Crosses Faced",
        "Crosses Stopped %",
        "Def. Actions Outside Pen. Area",
        "Avg. Distance of Def. Actions",
      ],
    },
  ],
  primaryDatasetBackgroundColorOutfield: [
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(92, 137, 104)",
    "rgb(92, 137, 104)",
    "rgb(92, 137, 104)",
    "rgb(92, 137, 104)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
  ],
  primaryDatasetBackgroundColorGK: [
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(116, 170, 187)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(160, 114, 203)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
    "rgb(152, 151, 86)",
  ],
  options: {
    layout: {
      padding: (context) => {
        const value = context.chart.width / 30;
        return {
          top: value,
          bottom: value * 1.5, // was 1.25,changed to 1.5 //trying to get a little more room on the bottom
          left: 0,
          right: 0,
        };
      },
    },
    tooltip: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    animation: false,
    plugins: {
      title: {
        display: true,
        text: "", //VARIABLE
        color: "white",
        padding: (context) => {
          let width = context.chart.width;

          return {
            bottom: width / 16,
          };
        },
        font: (context) => {
          let avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          let size = Math.round(avgSize / 16);
          //size = size > 32 ? 32 : size; // setting max limit to 32
          return {
            size: size,
            weight: "bold",
          };
        },
      },
      subtitle: {
        display: false,
        text: "",
        color: "white",
        font: (context) => {
          let avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          let size = Math.round(avgSize / 60);
          //size = size > 32 ? 32 : size; // setting max limit to 32
          return {
            size: size,
            //weight: "bold",
          };
        },
        padding: { top: 0, bottom: "2%" },
      },
      tooltip: {
        filter: (tooltipItem) => {
          return tooltipItem.datasetIndex === 0;
        },
      },
    },
    scales: {
      r: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          max: 100,
          min: 0,
          stepSize: 5,
          beginAtZero: false,
          lineWidth: 0,
          z: 0,
        },
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: false,
          lineWidth: (context) => {
            const width = context.chart.width;
            if (context.tick.value === 20 || context.tick.value === 70) {
              return width / 960;
            } else if (context.tick.value === 45) {
              return width / 480;
            } else return width / 1920;
          },
          color: (context) => {
            if (context.tick.value === 20 || context.tick.value === 70) {
              return "rgb(255,250,250,0.75)";
            } else if (context.tick.value === 45) {
              return "rgb(255,250,250,1)"; //snow
            } else if ((context.tick.value + 5) % 10 === 0) {
              if (context.tick.value === 95) return null;
              return "rgb(119,136,153, 0.75)"; //lightslategray
            } else return null;
          },
          borderDash: (context) => {
            const width = context.chart.width;
            if (context.tick.value === 20 || context.tick.value === 70) {
              return [width / 100];
            } else if (context.tick.value === 45) {
              return [width / 100];
            } else return [width / 700];
          },
          z: 1,
        },
        angleLines: {
          display: true,
          lineWidth: (context) => {
            let avgSize = Math.round(
              (context.chart.height + context.chart.width) / 2
            );
            let size = Math.round(avgSize / 200);
            //size = size > 32 ? 32 : size; // setting max limit to 32
            return size;
          },
          color: "#132257",
          z: 1,
        },
        pointLabels: {
          display: true,
          centerPointLabels: true,
          font: (context) => {
            let avgSize = Math.round(
              (context.chart.height + context.chart.width) / 2
            );
            let size = Math.round(avgSize / 64);
            //size = size > 32 ? 32 : size; // setting max limit to 32
            return {
              size: size,
              weight: "bold",
              textAlign: "center",
            };
          },
          color: "white",
        },
      },
    },
  },
  secondaryDataSetOutfield: {
    order: 1,
    data: [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100,
    ],
    backgroundColor: [
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(34, 55, 90)",
      "rgb(34, 55, 90)",
      "rgb(34, 55, 90)",
      "rgb(34, 55, 90)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
    ],
    datalabels: {
      display: true,
      align: "end",
      offset: (context) => {
        return context.chart.width / 9;
      },
      color: "white",
      backgroundColor: "#132257",
      borderWidth: (context) => {
        return context.chart.width / 750;
      },
      padding: (context) => {
        return context.chart.width / 375;
      },
      borderColor: "white",
      borderRadius: 4,
      font: (context) => {
        let avgSize = Math.round(
          (context.chart.height + context.chart.width) / 2
        );
        let size = Math.round(avgSize / 64);
        size = size > 32 ? 32 : size; // setting max limit to 32
        return {
          size: size,
          weight: "bold",
        };
      },
    },
    options: {
      showTooltips: false,
    },
    borderWidth: 0,
  },
  secondaryDataSetGK: {
    order: 1,
    data: [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    backgroundColor: [
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(38, 60, 107)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(47, 50, 109)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
      "rgb(46, 57, 87)",
    ],
    datalabels: {
      display: true,
      align: "end",
      offset: 75,
      color: "white",
      backgroundColor: "#132257",
      opacity: 1,
      borderWidth: 1,
      borderColor: "white",
      borderRadius: 4,
      font: (context) => {
        let avgSize = Math.round(
          (context.chart.height + context.chart.width) / 2
        );
        let size = Math.round(avgSize / 64);
        size = size > 32 ? 32 : size; // setting max limit to 32
        return {
          size: size,
          weight: "bold",
        };
      },
    },
    options: {
      showTooltips: false,
    },
    borderWidth: 0,
  },
};

export default config;
