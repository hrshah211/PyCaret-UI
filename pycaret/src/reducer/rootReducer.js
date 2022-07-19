import DataTypesReducer from "./setupReducer/dataTypesReducer/dataTypesReducer";
import MissingValuesReducer from "./setupReducer/missingValuesReducer/missingValuesReducer";
import PresetReducer from "./dataReducer/presetReducer/presetReducer";
import VisualizationReducer from "./visualizationReducer/visualizationReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  presetReducer: PresetReducer,
  visualizationReducer: VisualizationReducer,
  missingValuesReducer: MissingValuesReducer,
  dataTypesReducer: DataTypesReducer,
});

export default rootReducer;
