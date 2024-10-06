import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import StateFilter from "./components/StateFilter";
import PieChart from "./components/PieChart";
import CovidMap from "./components/CovidMap";
import LineChart from "./components/LineChart";
import data from "./data/covidData.json";

const App: React.FC = () => {
  const statesData = data.data.states;
  const [selectedState, setSelectedState] = useState(data.data.states[0]);
  const [trendData, setTrendData] = useState<any[]>(data.data.states); // Replace with actual trend data
  const [isStateSelected, setIsStateSelected] = useState(false);

  const overallData = {
    totalCases: statesData.reduce((sum, state) => sum + state.totalCases, 0),
    activeCases: statesData.reduce((sum, state) => sum + state.activeCases, 0),
    recovered: statesData.reduce((sum, state) => sum + state.recovered, 0),
    deaths: statesData.reduce((sum, state) => sum + state.deaths, 0),
  };

  const handleStateChange = (state: any) => {
    setSelectedState(state);
    setIsStateSelected(true);
  };

  const overallHistory = useMemo(() => {
    const historyMap: { [date: string]: any } = {};
    statesData.forEach((state) => {
      state.history.forEach(
        ({ date, totalCases, activeCases, recovered, deaths }) => {
          if (!historyMap[date]) {
            historyMap[date] = {
              date,
              totalCases: 0,
              activeCases: 0,
              recovered: 0,
              deaths: 0,
            };
          }
          historyMap[date].totalCases += totalCases;
          historyMap[date].activeCases += activeCases;
          historyMap[date].recovered += recovered;
          historyMap[date].deaths += deaths;
        }
      );
    });
    return Object.values(historyMap);
  }, [statesData]);

  return (
    <div className="container">
      <h1>COVID-19 Dashboard for India</h1>
      <div className="select-filter">
        <StateFilter
          states={statesData}
          placeholder={isStateSelected ? "Select a State" : "Select the State"}
          onChange={handleStateChange}
        />
      </div>
      {!isStateSelected ? (
        <div className="chart-container">
          <div className="chart chart-top">
            <PieChart data={overallData} />
          </div>
          <div className="chart-bottom-container">
            <div className="chart chart-bottom">
              <CovidMap cases={statesData} />
            </div>
            <div className="chart chart-bottom">
              <LineChart trendData={overallHistory} />
            </div>
          </div>
        </div>
      ) : (
        <div className="chart-container">
          <div className="chart chart-top">
            <PieChart data={selectedState} />
          </div>
          <div className="chart-bottom-container">
            <div className="chart chart-bottom">
              <CovidMap cases={statesData} />
            </div>
            <div className="chart chart-bottom">
              <LineChart trendData={selectedState.history} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
