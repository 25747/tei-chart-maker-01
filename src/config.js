const config = {
  datasetKeys: [
    {
      type: 0,
      description: "AM/W Template",
      keys: [
        { value: "Pressures", display: ["Pressures"] },
        { value: "Tkl+Int", display: ["Tackles +", "Int"] },
        { value: "Aerials won", display: ["Aerials", "Won"] },
        { value: "% of Aerials Won", display: ["% of", "Aerials", "Won"] },
        //
        {
          value: "Passes into Final Third",
          display: ["Passes", "into Final", "Third"],
        },
        {
          value: "Carries into Final Third",
          display: ["Carries", "Into", "Final Third"],
        },
        {
          value: "Progressive Passes Rec",
          display: ["Progressive", "Passes Rec"],
        },
        { value: "Pass Completion %", display: ["Pass", "Completion", "%"] },
        //
        { value: "Touches (Att Pen)", display: ["Touches", "(Att Pen)"] },
        { value: "xA", display: ["xA"] },
        { value: "npxG", display: ["npxG"] },
        {
          value: "Passes into Penalty Area",
          display: ["Passes", "into", "Penalty", "Area"],
        },
        //
        { value: "Crosses", display: ["Crosses"] },
        { value: "Dribbles Attempted", display: ["Dribbles", "Attempted"] },
        { value: "Successful Dribble %", display: ["Successful", "Dribble %"] },
        { value: "Fouls Drawn", display: ["Fouls", "Drawn"] },
      ],
    },
    {
      type: 1,
      description: "CB Template",
      keys: [
        { value: "Tackles", display: ["Tackles"] },
        {
          value: "% of dribblers tackled",
          display: ["%", "of Dribblers", "Tackled"],
        },
        { value: "Dribbled Past", display: ["Dribbled", "Past"] },
        { value: "Fouls Committed", display: ["Fouls", "Committed"] },
        //
        { value: "Interceptions", display: ["Interceptions"] },
        { value: "Pressures", display: ["Pressures"] },
        { value: "Clearances", display: ["Clearances"] },
        { value: "Dispossessed", display: ["Dispossessed"] },
        //
        {
          value: "Passes Attempted (Long)",
          display: ["Passes", "Attempted", "(Long)"],
        },
        {
          value: "Pass Completion % (Long)",
          display: ["Pass", "Completion", "% (Long)"],
        },
        { value: "Pass Completion %", display: ["Pass", "Completion", "%"] },
        {
          value: "Progressive Passing Distance",
          display: ["Progressive", "Passing", "Distance"],
        },
        //
        { value: "Aerials won", display: ["Aerials", "Won"] },
        { value: "% of Aerials Won", display: ["% of", "Aerials", "Won"] },
        { value: "Dribbles Completed", display: ["Dribbles", "Completed"] },
        { value: "Touches (Att Pen)", display: ["Touches", "(Att Pen)"] },
      ],
    },
    {
      type: 2,
      description: "CM Template",
      keys: [
        { value: "Tackles", display: ["Tackles"] },
        { value: "% of dribblers tackled", display: ["% Tackled"] },
        { value: "Interceptions", display: ["Interceptions"] },
        { value: "Pressures", display: ["Pressures"] },
        //
        {
          value: "Progressive Carrying Distance",
          display: ["Progressive", "Carry Distance"],
        },
        {
          value: "Progressive Passing Distance",
          display: ["Progressive", "Pass Distance"],
        },
        { value: "Pass Completion %", display: ["Pass", "Completion", "%"] },
        {
          value: "Passes Completed (Long)",
          display: ["Passes", "Completed", "(Long)"],
        },
        //
        {
          value: "Passes into Final Third",
          display: ["Passes into", "Final Third"],
        },
        { value: "Touches (Att 3rd)", display: ["Touches", "(Att Third)"] },
        { value: "xA", display: ["xA"] },
        { value: "npxG", display: ["npxG"] },
        //
        {
          value: "Carries into Final Third",
          display: ["Carries into", "Final Third"],
        },
        { value: "Dribbles Completed", display: ["Dribbles", "Completed"] },
        { value: "Successful Dribble %", display: ["Successful", "Dribble %"] },
        { value: "% of Aerials Won", display: ["% of", "Aerials", "Won"] },
      ],
    },
    {
      type: 3,
      description: "FW Template",
      keys: [
        { value: "Pressures", display: ["Pressures"] },
        { value: "Tkl+Int", display: ["Tackles +", "Int"] },
        { value: "Aerials won", display: ["Aerials", "Won"] },
        { value: "% of Aerials Won", display: ["% of", "Aerials", "Won"] },
        //
        { value: "Passes Received", display: ["Passes", "Received"] },
        {
          value: "Progressive Passes Rec",
          display: ["Progressive", "Passes Rec"],
        },
        { value: "Passes Completed", display: ["Passes", "Completed"] },
        { value: "xA", display: ["xA"] },
        //
        { value: "Touches (Att Pen)", display: ["Touches", "(Att Pen)"] },
        { value: "npxG", display: ["npxG"] },
        { value: "npxG/Sh", display: ["npxG/Sh"] },
        { value: "Goals", display: ["Goals"] },
        //
        {
          value: "Carries into Penalty Area",
          display: ["Carries", "Into", "Penalty", "Area"],
        },
        { value: "Fouls Drawn", display: ["Fouls", "Drawn"] },
        { value: "Dribbles Attempted", display: ["Dribbles", "Attempted"] },
        { value: "Successful Dribble %", display: ["Successful", "Dribble %"] },
      ],
    },
    {
      type: 4,
      description: "FB/WB Template",
      keys: [
        { value: "Tackles", display: ["Tackles"] },
        {
          value: "% of dribblers tackled",
          display: ["% of", "Dribblers", "Tackled"],
        },
        { value: "Interceptions", display: ["Interceptions"] },
        { value: "Pressures", display: ["Pressures"] },
        //
        {
          value: "Progressive Carrying Distance",
          display: ["Progressive", "Carrying", "Distance"],
        },
        {
          value: "Progressive Passes Rec",
          display: ["Progressive", "Passes Rec"],
        },
        { value: "Pass Completion %", display: ["Pass", "Completion", "%"] },
        { value: "Dispossessed", display: ["Dispossessed"] },
        //
        {
          value: "Passes into Penalty Area",
          display: ["Passes", "into", "Penalty", "Area"],
        },
        { value: "xA", display: ["xA"] },
        {
          value: "Crosses into Penalty Area",
          display: ["Crosses", "into", "Penalty", "Area"],
        },
        { value: "npxG", display: ["npxG"] },
        //
        { value: "Aerials won", display: ["Aerials", "Won"] },
        { value: "% of Aerials Won", display: ["% of", "Aerials", "Won"] },
        { value: "Dribbles Completed", display: ["Dribbles", "Completed"] },
        { value: "Fouls Drawn", display: ["Fouls", "Drawn"] },
      ],
    },
    // {
    //   type: 5,
    //   description: "GK Template",
    //   keys: [
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     //
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     { value: "", display: [""] },
    //     //
    //     { value: "", display: [""] },
    //     { value: "", display: ["Saves"] },
    //     { value: "", display: ["PSxG-GA"] },
    //     { value: "", display: ["Save %", "(Penalty", "Kicks)"] },
    //     //
    //     { value: "", display: ["Crosses", "Faced"] },
    //     { value: "", display: ["% Crosses", "Stopped"] },
    //     { value: "", display: ["Def.", "Actions", "Outside", "Pen. Area"] },
    //     { value: "", display: ["Avg", "Distance", "of Def.", "Actions"] },
    //   ],
    // },
  ],
  primaryDatasetBackgroundColor: [
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
  options: {
    layout: {
      padding: {
        top: 15,
        bottom: 25,
      },
    },
    tooltip: {
      enabled: false,
    },
    hover: {
      mode: null,
    },
    plugins: {
      title: {
        display: true,
        text: "", //VARIABLE
        color: "white",
        font: (context) => {
          //console.log("context ", context);
          let avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          let size = Math.round(avgSize / 16);
          //console.log(avgSize, size);
          //size = size > 32 ? 32 : size; // setting max limit to 32
          return {
            size: size,
            weight: "bold",
          };
        },
      },
      subtitle: {
        display: true,
        text: "", //VARIABLES - MULTIPLE CM Template - FBRef Data - Last 365 Days
        color: "white",
        font: (context) => {
          //console.log("context ", context);
          let avgSize = Math.round(
            (context.chart.height + context.chart.width) / 2
          );
          let size = Math.round(avgSize / 60);
          //console.log(avgSize, size);
          //size = size > 32 ? 32 : size; // setting max limit to 32
          return {
            size: size,
            //weight: "bold",
          };
        },
        padding: { top: 0, bottom: 20 },
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
          color: (context) => {
            if ([20, 45, 70].includes(context.tick.value)) {
              return "rgb(255,250,250,0.5)"; //snow
            } else if ((context.tick.value + 5) % 10 === 0) {
              if (context.tick.value === 95) return null;
              return "rgb(119,136,153, 0.5)"; //lightslategray
            } else return null;
          },
          borderDash: (context) => {
            if ([20, 45, 70].includes(context.tick.value)) {
              return [7];
            } else return [1];
          },
          z: 1,
        },
        angleLines: {
          display: true,
          //lineWidth: 3,
          lineWidth: (context) => {
            //console.log("context ", context);
            let avgSize = Math.round(
              (context.chart.height + context.chart.width) / 2
            );
            let size = Math.round(avgSize / 250);
            //console.log(avgSize, size);
            //size = size > 32 ? 32 : size; // setting max limit to 32
            return size;
          },
          color: "#132257",
          z: 2,
        },
        pointLabels: {
          display: true,
          centerPointLabels: true,
          //align: "end",
          //textAlign: "right",
          font: (context) => {
            //console.log("context ", context);
            let avgSize = Math.round(
              (context.chart.height + context.chart.width) / 2
            );
            let size = Math.round(avgSize / 64);
            //console.log(avgSize, size);
            //size = size > 32 ? 32 : size; // setting max limit to 32
            return {
              size: size,
              weight: "bold",
            };
          },
          color: "white",
        },
      },
    },
  },
};

export default config;
