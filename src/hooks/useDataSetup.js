import { useEffect, useState } from "react";
import config from "../config";

const useDataSetup = (data) => {
  const [dataSetupComplete, setDataSetupComplete] = useState(false);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    if (!!data) {
      const percentileArray = [];
      const per90Array = [];
      const labelArray = [];
      const newOptions = config.options;

      newOptions.plugins.title.text = data.playerName;
      document.title = `${data.playerName} - ${data.timePeriod} - ${data.type.description}`;
      newOptions.plugins.subtitle.text = `${data.timePeriod} - ${data.type.description} - FBRef Data`;
      //options done

      const dataKeys = config.datasetKeys[data.type.type].keys;
      dataKeys.forEach((dataKey) => {
        const thisKey = data.data.find((datum) => dataKey.value === datum.stat);
        percentileArray.push(thisKey.percentile);
        per90Array.push(thisKey.per90);
        labelArray.push(dataKey.display);
      });

      setFinalData({
        data: {
          labels: labelArray,
          datasets: [
            {
              data: percentileArray,
              backgroundColor: config.primaryDatasetBackgroundColor,
              datalabels: {
                display: false,
              },
              borderWidth: 0,
            },
            {
              data: [
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100,
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
                offset: 70,
                color: "white",
                backgroundColor: "#132257",
                opacity: 1,
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 4,
                font: (context) => {
                  //console.log("context ", context);
                  let avgSize = Math.round(
                    (context.chart.height + context.chart.width) / 2
                  );
                  let size = Math.round(avgSize / 64);
                  //console.log(avgSize, size);
                  size = size > 32 ? 32 : size; // setting max limit to 32
                  return {
                    size: size,
                    weight: "bold",
                  };
                },
                formatter: (value, context) => {
                  return per90Array[context.dataIndex];
                },
              },
              options: {
                showTooltips: false,
              },
              borderWidth: 0,
            },
          ],
        },
        options: newOptions,
      });
      setDataSetupComplete(true);
    }
  }, [data]);

  return [finalData, dataSetupComplete];
};

export default useDataSetup;
