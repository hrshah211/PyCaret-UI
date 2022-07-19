import initialState from "../../../store/initialState";
import { presetActionTypes } from "../../../actionTypes/dataActionTypes/presetActionTypes/presetActionTypes";

const PresetReducer = (state = initialState, action) => {
  switch (action.type) {
    case presetActionTypes.SET_SELECTED_DATASET:
      return {
        ...state,
        data: {
          ...state.data,
          preset: {
            ...state.data.preset,
            selectedDataset: action.payload,
          },
        },
      };
    case presetActionTypes.SET_DATA_FILES:
      return {
        ...state,
        data: {
          ...state.data,
          preset: {
            ...state.data.preset,
            dataFiles: action.payload,
          },
        },
      };
    case presetActionTypes.SET_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          preset: {
            ...state.data.preset,
            loadedData: action.payload,
            dataColumns: Object.keys(action.payload[0]),
          },
        },
      };
    default:
      return state;
  }
};

export default PresetReducer;
