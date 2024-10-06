import React from "react";
import Plot from "react-plotly.js";

interface PieChartProps {
  data: {
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const { totalCases, activeCases, recovered, deaths } = data;

  return (
    <Plot
      data={[
        {
          values: [totalCases, activeCases, recovered, deaths],
          labels: ["Total Cases", "Active Cases", "Recovered", "Deaths"],
          type: "pie",
        },
      ]}
      layout={{ title: "COVID-19 Case Distribution" }}
    />
  );
};

export default PieChart;
