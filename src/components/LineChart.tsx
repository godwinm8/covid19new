import React from "react";
import Plot from "react-plotly.js";

interface LineChartProps {
  trendData: any[];
}

const LineChart: React.FC<LineChartProps> = ({ trendData }) => {
  return (
    <Plot
      data={[
        {
          x: trendData.map((data) => data.date),
          y: trendData.map((data) => data.totalCases),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "blue" },
          name: "Total Cases",
        },
        {
          x: trendData.map((data) => data.date),
          y: trendData.map((data) => data.activeCases),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
          name: "Active Cases",
        },
        {
          x: trendData.map((data) => data.date),
          y: trendData.map((data) => data.recovered),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "green" },
          name: "Recovered",
        },
        {
          x: trendData.map((data) => data.date),
          y: trendData.map((data) => data.deaths),
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "black" },
          name: "Deaths",
        },
      ]}
      layout={{
        title: "COVID-19 Trend",
        xaxis: { title: "Date" },
        yaxis: { title: "Count" },
      }}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default LineChart;
