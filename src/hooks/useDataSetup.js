import { useEffect, useState } from "react";
import { format, sub } from "date-fns";
import config from "../config/config";

const useDataSetup = (data) => {
  const [dataSetupComplete, setDataSetupComplete] = useState(false);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    if (!!data) {
      const percentileArray = [];
      const per90Array = [];
      const labelArray = [];
      const newOptions = config.options;

      if (data.timePeriod === "Last 365 Days") {
        const today = new Date();
        const startDate = sub(today, { days: 365 });
        console.log(startDate);
        const endFormat = format(today, "LLL yyyy");
        const startFormat = format(startDate, "LLL yyyy");
        data.timePeriod = `Last 365 Days (${startFormat} - ${endFormat})`;
      }

      newOptions.plugins.title.text = data.playerName;
      document.title = `${data.playerName} - ${data.timePeriod} - ${data.type.description}`;
      newOptions.plugins.subtitle.text = [
        `${data.clubName} - ${data.type.description} - FBRef Per 90 Data`,
        `${data.minutesPlayed} Minutes Played - ${data.timePeriod}`,
      ];
      //options done

      const dataKeys = config.datasetKeys[data.type.type].keys;
      dataKeys.forEach((dataKey) => {
        const thisKey = data.data.find((datum) => dataKey.value === datum.stat);
        percentileArray.push(thisKey.percentile);
        per90Array.push(thisKey.per90);
        labelArray.push(dataKey.display);
      });
      let secondaryDataSet = {};
      let primaryBackgroundColor;
      if (data.type.type < 5) {
        secondaryDataSet = {
          ...config.secondaryDataSetOutfield,
        };
        secondaryDataSet.datalabels.formatter = (value, context) => {
          return per90Array[context.dataIndex];
        };
        primaryBackgroundColor = [
          ...config.primaryDatasetBackgroundColorOutfield,
        ];
      } else {
        secondaryDataSet = {
          ...config.secondaryDataSetGK,
        };
        secondaryDataSet.datalabels.formatter = (value, context) => {
          return per90Array[context.dataIndex];
        };
        primaryBackgroundColor = [...config.primaryDatasetBackgroundColorGK];
      }

      setFinalData({
        data: {
          labels: labelArray,
          datasets: [
            {
              data: percentileArray,
              backgroundColor: primaryBackgroundColor,
              datalabels: {
                display: false,
              },
              borderWidth: 0,
            },
            {
              ...secondaryDataSet,
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
