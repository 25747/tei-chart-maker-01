import { useEffect, useState } from "react";
import config from "../config/config";

const useDataSetup = (data) => {
  const [dataSetupComplete, setDataSetupComplete] = useState(false);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    if (!!data) {
      //console.log(JSON.stringify(data.data));
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
