import React from 'react';

interface StateFilterProps {
    states: string[];
    selectedState: string;
    onSelect: (state: string) => void;
}
const StateFilter: React.FC<StateFilterProps> = ({ states, selectedState, onSelect }) => (
    <select value={selectedState} onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select a state</option>
        {states.map(state => <option key={state} value={state}>{state}</option>)}
    </select>
);



export default StateFilter;
