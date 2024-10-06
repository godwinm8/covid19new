import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// Sample reducer (add more as needed)
const initialState = {
  selectedState: null,
  covidData: {},
};

const covidReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SELECTED_STATE":
      return { ...state, selectedState: action.payload };
    case "SET_COVID_DATA":
      return { ...state, covidData: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  covid: covidReducer,
  // Add more reducers if needed
});

export const store = createStore(rootReducer);
