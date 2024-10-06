import React from "react";
import { useSelector } from "react-redux";
import PieChart from "./PieChart";
import CovidMap from "./CovidMap";
import LineChart from "./LineChart";

const LandingPage: React.FC = () => {
  const { statesData, overallData } = useSelector((state: any) => state.covid);

  return (
    <div className="chart-container">
      <div className="chart chart-top">
        <PieChart data={overallData} />
      </div>
      <div className="chart-bottom-container">
        <div className="chart chart-bottom">
          <CovidMap cases={statesData} />
        </div>
        <div className="chart chart-bottom">
          <LineChart trendData={[]} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
