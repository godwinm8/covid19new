import React from "react";

interface StateFilterProps {
  states: any[];
  onChange: (state: any) => void;
  placeholder?: string;
}

const StateFilter: React.FC<StateFilterProps> = ({
  states,
  placeholder,
  onChange,
}) => {
  return (
    <select onChange={(e) => onChange(states[e.target.selectedIndex])}>
      <option disabled selected>
        {placeholder}
      </option>
      {states.map((state) => (
        <option key={state.name} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
  );
};

export default StateFilter;
