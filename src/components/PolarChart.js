import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  SubTitle,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { PolarArea } from "react-chartjs-2";
import useDataSetup from "../hooks/useDataSetup";

const PolarChart = ({ data }) => {
  const [polarData, isPolarDataReady] = useDataSetup(data);

  ChartJS.register(
    RadialLinearScale,
    ArcElement,
    //Tooltip,
    Title,
    ChartDataLabels,
    SubTitle
  );

  return (
    <>
      {isPolarDataReady ? (
        <PolarArea data={polarData.data} options={polarData.options} />
      ) : null}
    </>
  );
};

export default PolarChart;
