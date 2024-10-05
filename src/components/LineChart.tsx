import React from "react";
import Plot from "react-plotly.js";

interface LineChartProps {
  trendData: {
    date: string;
    totalCases: number;
    activeCases: number;
    recovered: number;
    deaths: number;
  }[];
}

const LineChart: React.FC<LineChartProps> = ({ trendData }) => {
  const dates = trendData.map((item) => item.date);
  const totalCases = trendData.map((item) => item.totalCases);
  const activeCases = trendData.map((item) => item.activeCases);
  const recovered = trendData.map((item) => item.recovered);
  const deaths = trendData.map((item) => item.deaths);
  return (
    <Plot
      data={[
        {
          x: dates,
          y: totalCases,
          mode: "lines",
          type: "scatter",
          name: "Total Cases",
        },
        {
          x: dates,
          y: activeCases,
          type: "scatter",
          mode: "lines",
          name: "Active Cases",
        },
        {
          x: dates,
          y: recovered,
          type: "scatter",
          mode: "lines",
          name: "Recovered",
        },
        {
          x: dates,
          y: deaths,
          type: "scatter",
          mode: "lines",
          name: "Deaths",
        },
      ]}
      layout={{
        title: "COVID-19 Trends",
        // xaxis: { title: "Date" },
        // yaxis: { title: "Number of Cases" },
      }}
    />
  );
};

export default LineChart;
