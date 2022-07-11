import MissingValuesReducer from "./setupReducer/missingValuesReducer";
import PresetReducer from "./dataReducer/presetReducer/presetReducer";
import { combineReducers } from "redux";

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  preserReducer: PresetReducer,
  missingValuesReducer: MissingValuesReducer,
});

export default rootReducer;
