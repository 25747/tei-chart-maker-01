import { useEffect, useState } from "react";
//import { format, sub } from "date-fns";
import config from "../config/config";
import statDictionary from "../config/dictionary";

const useDataSetup = (data) => {
  const [dataSetupComplete, setDataSetupComplete] = useState(false);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    if (!!data) {
      const percentileArray = [];
      const per90Array = [];
      const labelArray = [];
      const newOptions = config.options;

      // if (data.timePeriod === "Last 365 Days") {
      //   const today = new Date();
      //   const startDate = sub(today, { days: 365 });
      //   const endFormat = format(today, "LLL yyyy");
      //   const startFormat = format(startDate, "LLL yyyy");
      //   data.timePeriod = `Last 365 Days (${startFormat} - ${endFormat})`;
      // }
      //Keeping this around for now in case we want to bring it back

      newOptions.plugins.title.text = data.playerName;
      document.title = `${data.playerName} - ${data.timePeriod} - ${data.type.description}`;
      newOptions.plugins.subtitle.text = [
        `${data.timePeriod}`,
        `${data.minutesPlayed} Minutes Played - FBRef Per 90 Data`,
      ];
      //options done

      const dataKeys = config.datasetKeys[data.type.type].keys;
      dataKeys.forEach((dataKey) => {
        const thisKey = data.data.find((datum) => dataKey.value === datum.stat);
        // console.log("thisKey", thisKey);
        // console.log("datakey", dataKey);
        // console.log("dict", statDictionary[dataKey.value]);
        percentileArray.push(thisKey.percentile);
        per90Array.push(thisKey.per90);
        labelArray.push(statDictionary[dataKey.value]);
        //labelArray.push(dataKey.display);
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
