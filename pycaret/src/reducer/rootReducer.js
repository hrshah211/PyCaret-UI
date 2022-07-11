import DataTypesReducer from "./setupReducer/dataTypesReducer/dataTypesReducer";
import MissingValuesReducer from "./setupReducer/missingValuesReducer/missingValuesReducer";
import PresetReducer from "./dataReducer/presetReducer/presetReducer";
import { combineReducers } from "redux";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  presetReducer: PresetReducer,
  missingValuesReducer: MissingValuesReducer,
  dataTypesReducer: DataTypesReducer,
});

export default rootReducer;
