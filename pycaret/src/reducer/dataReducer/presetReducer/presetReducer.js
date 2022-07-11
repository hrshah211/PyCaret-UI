import initialState from "../../../store/initialState";
import { presetActionTypes } from "../../../actionTypes/dataActionTypes/presetActionTypes/presetActionTypes";

const PresetReducer = (state = initialState, action) => {
  switch (action.type) {
    case presetActionTypes.SET_SELECTED_DATASET:
      return {
        ...state,
        preset: {
          ...state.preset,
          selectedDataset: action.payload,
        },
      };
    default:
      return state;
  }
};

export default PresetReducer;
