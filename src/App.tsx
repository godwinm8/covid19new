import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StateFilter from './components/StateFilter';
import PieChart from './components/PieChart';
import CovidMap from './components/CovidMap';
import LineChart from './components/LineChart';
import data from './data/covidData.json';

const App: React.FC = () => {
    const [statesData, setStatesData] = useState<any[]>(data.data.states);
    const [selectedState, setSelectedState] = useState('');
    const [trendData, setTrendData] = useState<any[]>(data.data.states); // Replace with actual trend data
    const [isStateSelected, setIsStateSelected] = useState(false);

    useEffect(() => {
        // Replace with real data fetching if needed
    }, []);

    const handleStateChange = (state: string) => {
      if(state=="Select a state"){
        setIsStateSelected(false);
      }else{
        setIsStateSelected(true);
      }
        setSelectedState(state);
        // Fetch trend data based on selected state
    };

    const selectedData = statesData.find(state => state.name === selectedState);

    return (
        <div className="container">
            <h1>COVID-19 Dashboard for India</h1>
            <div className="select-filter">
                <StateFilter 
                    states={statesData.map(state => state.name)} 
                    selectedState={selectedState} 
                    onSelect={handleStateChange} 
                />
            </div>
            {selectedData && (
                <>
                    <div className="chart-container">
                        <div className="chart">
                            <PieChart data={selectedData} />
                        </div>
                        <div className="chart map-container">
                            <CovidMap cases={statesData} />
                        </div>
                        <div className="chart">
                            <LineChart trendData={trendData} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;



